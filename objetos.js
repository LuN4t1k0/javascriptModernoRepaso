const web = {
  nombre : 'previley',
  link : {
    enlace : 'www.previley.cl'

  },
  redesSociales : {
    youtube : {
      enlace : 'youtube.com/previley',
      nombre : 'previley. yt',
      seguidores: 2000
    },
    facebook: {
      enlace : 'facebook.com/previley',
      nombre : 'previley. fb'
    }
  }
}
//destructuring Object 

const {enlace,nombre,seguidores} = web.redesSociales.youtube

console.log(seguidores);