import FishLarva from './fishLarva'

let canvas
let ctx
let particles = []
let time_to_recreate = false
let max_particles = 1200
let frequency = 20
let init_num = max_particles

/*
 * Function to clear layer canvas
 * @num:number number of particles
 */
function popolate(num) {
    for (var i = 0; i < num; i++) {
      setTimeout(
        (function (x) {
          return function () {
            let random = Math.random();
            // ------------------------------------
            // Set type of planktom
            let type = new FishLarva(ctx);
            // if (!time_to_recreate) {
            //   if (random > 0.97) type = new FishEgg(canvas);
            //   if (random < 0.1 && random > 0) type = new Paramecium(canvas);
            // }
            // if (random > 0.1 && random < 0.8) type = new FishLarvaEgg(canvas);
  
            // if(random < .1) this.type  = "bryozoan"
            // ------------------------------------
            // Add particle
            particles.push(type);
          };
        })(i),
        frequency * i
      );
    }
    return particles.length;
  }


/* Function to init canvas*/
function initCanvas() {
  canvas = document.getElementById('canvas')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  ctx = canvas.getContext('2d')
  popolate(max_particles);
  update()
}

/*
 * Function to clear layer canvas
 */
function clear() {
  let grd = ctx.createRadialGradient(
    canvas.width / 2,
    canvas.height / 2,
    0,
    canvas.width / 2,
    canvas.height / 2,
    canvas.width
  )
  grd.addColorStop(0, 'rgba(25,25,54,0.12)')
  grd.addColorStop(1, 'rgba(0,0,20,0.01)')
  // Fill with gradient
  ctx.fillStyle = grd
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}

/*
 * Function to update particles in canvas
 */
function update() {
  clear()
  particles = particles.filter(function (p) {
    return p.move()
  })
  // Recreate particles
  if (time_to_recreate) {
    if (particles.length < init_num) {
      popolate(1)
    }
  }
  requestAnimationFrame(update.bind(this))
}

export default {
  initCanvas
}
