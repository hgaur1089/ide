import React from 'react';
import { Grid,Typography,useMediaQuery,useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import './ProjectCard.css.map'
import ecommerse from '../../assets/jpgtry.jpg';
import bankingrj from '../../assets/bankingrj.jpg';
import ngowf from '../../assets/ngowf.jpg';
import keepnotes from '../../assets/keepnotes.jpg';
import quizapp from '../../assets/quizapp.jpg';
import Done from '../../assets/done.jpg';

import ProjectCard from './ProjectCard';

import { AnimatedDiv } from '../animated';




const useStyles = makeStyles(theme => ({
    rowContainer: {
        paddingLeft: '2em',
        paddingRight: '2em',
        paddingTop: '2em',
        paddingBottom: '10em',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '1em',
            paddingRight: '1em',
            paddingTop: '1em',
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: '0.5em',
            paddingRight: '0.5em',
            paddingTop: '0.5em',
        }
    },
}))

const data1 = [
    [
        {
            type: 'Website',
            name: "Skilling Programs",
            desc: "Training in areas like electrical and electronics fabrication, embedded systems design. Embedded programming, 3D printing, robotics, welding, IoT, Machine Learning, AI, bio-engineering, biomedical, etc",
            image: "../../assets/c1.png",
        },
        {
            type: 'Website',
            name: "Bootcamps",
            desc: "Training of members(including those from other institutions, spread over a few weeks, continuingat workplaces,if required)",
            image: "../../assets/c2png.png",
        },
        {
            type: 'Website',
            name: "Ideation Workshops",
            desc: "To generate ideas on which students can work in the IDEA lab, including field visits",
            image: "../../assets/c3.png",
        },
        {
            type: 'Website',
            name: "Awareness Workshops for Industry",
            desc: "Publicizing IDEA Lab among industries, to encourage them to use the facilities",
            image: "../../assets/c4.png",
        },
        {
            type: 'Website',
            name: "Internships",
            desc: "For hands-on training as part of their course-work during summer and winter vacations. Internships based on industry problems should be preferred.",
            image: "../../assets/c5.png",
        },
        {
            type: 'Website',
            name: "Professional Skilling Programs",
            desc: "Welding,3D printing, mechanical fabrication, etc.",
            image: "../../assets/c6.png",
        },
        {
            type: 'Website',
            name: "School Teachers Awareness Program",
            desc: "Demonstration and providing hands-on experience to members.",
            image: "../../assets/c7.png",
        },
        {
            type: 'Website',
            name: "Project by School Students",
            desc: "Opportunity for student to work on Industry projects",
            image: "../../assets/c8.png",
        },
        {
            type: 'Website',
            name: "Open Day for school students",
            desc: "Exposure to facilities in IDEA Lab to ignite their minds. (On Science Day/Technology Day/ Teachers Day/ Engineers Day)",
            image: "../../assets/c9.png",
        },
        {
            type: 'Website',
            name: "Participation in annual technical exhibitions",
            desc: "Technical exhibitions etc For example, Tech FEST, Mind SPARK, etc. organized by renowned Institutes/Industries, etc to showcase activities/products/prototypes developed in IDEA labs",
            image: "../../assets/c10.png",
        },
        {
            type: 'Website',
            name: "Newsletter",
            desc: "To disseminate information to all the labs about activities of other labs,technology issues, any interesting development, etc.",
            image: "../../assets/c11.png",
        },
        {
            type: 'Website',
            name: "Annual conference/ symposium of all IDEA labs",
            desc: "To promote active interaction, showcase of lab activities, promote collaboration at national and international level labs",
            image: "../../assets/c12.png",
        },
    ],[
        {
            type: 'Website',
            name: "CENTRAL DRILL",
            desc: "A Centre drill is a two-fluted tool consisting of a twist drill with a 60° countersink; used to drill countersink center holes in a workpiece to be mounted between centers for turning or grinding.",
            image: 
        },
        {
            type: 'Website',
            name: "LASER CNC CUTTING",
            desc: "Laser cutting is a technology that uses a laser to vaporize materials, resulting in a cut edge. The laser optics and CNC (computer numerical control) are used to direct the material or the laser beam generated.",
            image: 
        },
        {
            type: 'Website',
            name: "3-D PRINTER",
            desc: "3D printing or additive manufacturing is a process of making three dimensional solid objects from a digital file. The creation of a 3D printed object is achieved using additive processes. In an additive process an object is created by laying down successive layers of material until the object is created. Each of these layers can be seen as a thinly sliced cross-section of the object.",
            image: 
        },
        {
            type: 'Website',
            name: "LATHE MACHINE",
            desc: "A lathe is a machine tool that rotates a workpiece about an axis of rotation to perform various operations such as cutting, sanding,knurling, drilling, deformation, facing and turning, with tools that are applied to the workpiece to create an object with symmetry about that axis",
            image: 
        },
        {
            type: 'Website',
            name: "SOLDERING STATION",
            desc: "A soldering station is a multipurpose power soldering device designed for electronic components soldering. This type of equipment is mostly used in electronics and electrical engineering",
            image: 
        },
        {
            type: 'Website',
            name: "24*7 INTERNET ACCESS",
            desc: "The Facility will be provided with 24 x 7 internet access to aid the young inventors",
            image: 
        },
        {
            type: 'Website',
            name: "FIRE EXTINGUISHER",
            desc: "A fire extinguisher is an active fire protection device used to extinguish or control small fires, often in emergency situations. It is not intended for use on an out-of-control fire, such as one which has reached the ceiling and endangers the user",
            image: 
        },
        {
            type: 'Website',
            name: "FIRST AID",
            desc: "A projector or image projector is an optical device that projects an image (or moving images) onto a surface, commonly a projection screen. Most projectors create an image by shining a light through a small transparent lens, but some newer types of projectors can project the image directly, by using lasers",
            image: 
        },
        {
            type: 'Website',
            name: "Electronic Component Receptor",
            desc: "A microscope is a laboratory instrument used to examine objects that are too small to be seen by the naked eye. Magnification of the image is achieved by displaying the data from scanning a physically small sample area on a relatively large screen",
            image: 
        },
    ],[
        {
            type: 'Website',
            name: "",
            desc: "",
            image: 
        },
    ]
]

const data = [
    { 
    type: 'Website', 
    name: "E-commmerce website", 
    desc: "This is a Ecommmerce website build with react,firebase,ExpressJs,Stripe", 
    gitLink: 'https://github.com/ritik2727/ecommerce', 
    appLink: 'https://ecommerse-ritik2727.vercel.app/', 
    image: ecommerse
    },
    { 
      type: 'Website', 
      name: "NG Website", 
      desc: "Website Payment integration using stripe in Donation website .Tech stack — ReactJS | Stripe | Material-UI .", 
      gitLink: 'https://github.com/ritik2727/Payment_integration',
       appLink: 'https://donation-two.vercel.app/', 
       image:ngowf
    },
    { 
      type: 'Website', 
      name: "Basic Banking Website", 
      desc: "This is a Basic Banking  website build with react,firebase",
       gitLink: 'https://github.com/ritik2727/BankingSystem', 
       appLink: 'https://banking-ritik2727.vercel.app/',
        image: bankingrj
    },
    { 
      type: 'Mobile App', 
      name: "DoneWithIt App", 
      desc: "This is a Mobile App build with React Native and NodeJs .",
       gitLink: 'https://github.com/ritik2727/DoneWithIt', 
       appLink: 'https://github.com/ritik2727/DoneWithIt',
        image: Done
    },
    { 
      type: 'Website', 
      name: "Quiz Game Website", 
      desc: "This is a Quiz Game Website build with ReactJs",
       gitLink: 'https://github.com/ritik2727/quiz-app', 
       appLink: 'https://quiz-app-op.herokuapp.com/',
        image: quizapp
    },
    { 
        type: 'Website', 
        name: "Keep Notes Website", 
        desc: "Notes Website with React, React Router and Redux",
         gitLink: 'https://github.com/ritik2727/note-app', 
         appLink: 'https://client-ritik2727.vercel.app/',
          image: keepnotes
      }
  ]

function Project(props) {
    const theme = useTheme();
    const classes = useStyles();

    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  

    return (
        <AnimatedDiv  
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.3,type: 'spring' }}
        >
        <Grid 
        container 
        direction='column' 
        alignItems='center' 
        justifyContent='center' 
        className={classes.rowContainer}
        >
        <Grid item style={{marginBottom:'4em',marginTop:'4em'}}>
            <Typography  variant='h2' align='center' >Projects</Typography>
        </Grid>
        <Grid 
            item 
            container 
            direction={matchesMD ? 'column' : 'row'}
            alignItems='center' 
            justifyContent='center' 
            spacing={4}
        >
            {data && data.map((item,id) =>(
                
                <Grid item key={id} style={{marginTop:'2em',marginBottom:'2em'}}  >
                  <ProjectCard 
                        key={item.name}
                        image={item.image} 
                        type={item.type} 
                        name={item.name} 
                        desc={item.desc} 
                        // gitLink={item.gitLink}
                        // appLink={item.appLink}
                    />       
                </Grid>
            ))}      
        </Grid>
    </Grid>
    </AnimatedDiv>
    );
}

export default Project;