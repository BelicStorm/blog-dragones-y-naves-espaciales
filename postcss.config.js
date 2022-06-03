// const purgecss = require('@fullhuman/postcss-purgecss')({

//   // Specify the paths to all of the template files in your project 
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],

//   // Include any special characters you're using in this regular expression
//   defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
// })

// const cssnano = require('cssnano')

/* module.exports = {
  plugins: [
      'tailwindcss',
      'autoprefixer',
      cssnano({
          preset: 'default',
      }),
      purgecss //uncomment to purge css
  ]
} */



const plugins = {
  'autoprefixer': {},
  'tailwindcss': {},
  "cssnano":{
      preset: 'default'
    },
  '@fullhuman/postcss-purgecss':{
    content:[
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./utils/**/*.{js,ts,jsx,tsx}",
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  }
}

module.exports = {
  plugins,
}
