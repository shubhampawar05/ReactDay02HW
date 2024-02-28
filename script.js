console.log(React);

let h2  = React.createElement('h2' ,{},'Topics Covered' )
let p1  = React.createElement('p1' ,{},'The following is a list of all the topics we cover in the MDN learning area.')
let a  = React.createElement('a' ,{href:"#"},'Getting started with the web' )
let dl  = React.createElement('dl' ,{}, a )
let dd  = React.createElement('dd' ,{},'Provides a practical introduction to web development for complete beginners.' )
let a1  = React.createElement('a' ,{href:'#'}, 'HTML — Structuring the web' )
let dl1  = React.createElement('dl' ,{}, a1)
let dd1  = React.createElement('dd' ,{},'HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.' )
let a2  = React.createElement('a' ,{href:"#"}, ' CSS-Styling the web' )
let dl2  = React.createElement('dl' ,{}, a2)
let dd2  = React.createElement('dd' ,{},"CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS" )

let div  = React.createElement('div' ,{className:"outerDiv"}, [h2 ,p1 ,dl,dd,dl1,dd1,dl2,dd2] )

ReactDOM.render(div,document.getElementById('root'))

