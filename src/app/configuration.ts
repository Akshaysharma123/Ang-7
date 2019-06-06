export const configuration = {
    header: {
        heading: 'My website',
        headingtext: 'Angular is a free landing page template you can use for your projects. It is free to use for your personal and commercial projects, enjoy!',
        buttontext: 'Do some action',
        buttonlink: '\home'
    },  
    intro: {
        tagline: 'success',
        tittle: 'How We Help You To Sell Your Product',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        features:  [
            {icon: 'html5', title: 'HTML5 &amp; CSS3', description: 'Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro  neglegentur iudico'},
            {icon: 'bolt', title: 'Easy to Use', description: 'Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit  detracto mediocrem disputationi'},
            {icon: 'tablet', title: 'Fully Responsive', description: 'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro  nemore vivendum'},
           {icon: 'rocket', title: 'Parallax Effect', description: 'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro  nemore vivendum'}
        ]
      },

    service: {
        tagline: 'BELIEVING',
        tittle: 'Focusing On What Matters Most',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },

    testimonial: {
        tagline: 'success',
        tittle: 'How We Help You To Sell Your Product',
        description: '',
        feedback:[
            {name: 'John Doe', userimage: 'user-1.jpg', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'abc'},
            {name: 'Roslyn Doe', userimage: 'user-2.jpg', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'xyz'},
            {name: 'Thomas Doe', userimage: 'user-3.jpg', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'pqr'},
        ]
    },

    clients: {
        tagline: 'TRUST',
        tittle: 'Companies who use our services',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        Companies: [
            {name: 'Tree',weblink: 'company-logo1.png',logo: 'company-logo1.png'},
            {name: 'Fingerprint',weblink: 'company-logo2.png',logo: 'company-logo2.png'},
            {name: 'The Man',weblink: 'company-logo3.png',logo: 'company-logo3.png'},
            {name: 'Mustache',weblink: 'company-logo4.png',logo: 'company-logo4.png'},
            {name: 'Goat',weblink: 'company-logo5.png',logo: 'company-logo5.png'},
            {name: 'Justice',weblink: 'company-logo6.png',logo: 'company-logo6.png'},
            {name: 'Ball',weblink: 'company-logo7.png',logo: 'company-logo7.png'},
            {name: 'Cold',weblink: 'company-logo8.png',logo: 'company-logo8.png'},
            {name: 'Cold',weblink: 'company-logo9.png',logo: 'company-logo9.png'},
        ]
    },

    pricing: {
        tagline: 'YOUR CHOICE',
        tittle: 'We have the right package for you',
        description: '',
        plan:[
            {title: 'PERSONAL', subtitle: 'The standard version',description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',price: '12',currency: '₹',  
                Downloads:'5 Downloads', Extensions:'2 Extensions', Tutorials:'Tutorials', Support:'Forum Support', updates:'1 year free updates',
               buttontext: 'Buy Now', buttonlink: '#',featured: true
            },
            {title: 'STUDENT', subtitle: 'Most popular choice',description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',price: '29',currency: '₹', 
                Downloads:'15 Downloads',Extensions:'5 Extensions',Tutorials:'Tutorials with Files',Support:'Forum Support',updates:'2 year free updates',
                buttontext: 'Buy Now', buttonlink: '#',featured: true
             },
             {title: 'BUSINESS', subtitle: 'For the whole team',description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',price: '49',currency: '₹', 
                Downloads:'Unlimited Downloads',Extensions:'Unlimited Extensions',Tutorials:'HD Video Tutorials',Support:'Chat Support',updates:'Lifetime free updates',
                buttontext: 'Buy Now', buttonlink: '#',featured: true
             }
          ]
        },
     
    gallery: {
        images: [
            'gallery-image-1.jpg',
            'gallery-image-2.jpg',
            'gallery-image-3.jpg',
            'gallery-image-4.jpg',
            'gallery-image-5.jpg',
            'gallery-image-6.jpg',
        ]
    },    
   
   footer: {
       copyrightText: "made with love by",
       developer: "my working",
       developerLink: ""
   },
   
   socialsite: [
       {link: 'https://www.facebook.com', target: '_blank', title: 'Facebook', username: 'Facebook', icon: 'facebook'},
       {link: 'http://google.com', target: '_blank', title: 'Google+', username: 'Google', icon: 'google-plus'},
       {link: 'http://www.twitter.com', target: '_blank', title: 'Twitter', username: 'Twitter', icon: 'twitter'},
       {link: 'http://www.instagram.com', target: '_blank', title: 'Instagram', username: 'Instagram', icon: 'instagram'},
       {link: 'http://www.behance.net', target: '_blank', title: 'behance', username: 'behance', icon: 'behance'}
    ]
};