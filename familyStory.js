//  title: familyStory.js
// author: David Kent (dk.davidkent@gmail.com)

//       Family Tree View
//       ================
// Dimensions: buttons 200px wide 60px high
// short verticals 70px, long verticals 200px

// array of families data. See VSCode snippets:
// 'fm' calls familyStory-familiesArray:
// 'kd' familyStory-addChild
// POSITION THE CURSOR NEXT TO THE LAST BRACE }
// 
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function openCens(message, details) {
    const bar = document.getElementById("census-details");
    bar.innerHTML = details;
    const space = document.getElementById("imgSpace");
    space.innerHTML = '<img src="./censuses/' + message + '" width="100%" />';

    document.getElementById("census-pannel").style.width = "100%"; 
}
function closeCens() {
    document.getElementById("census-pannel").style.width = "0";
}

// const families = [
//     { // Family 0
//     dad : { name: "Fred01", dates: "1900", vektr:1},
//     mum : { name: "Mary", dates: "1901", vektr:1},
//     kids : [{ name: "Jimmy", dates: "1950", vektr:1},
//     { name: "Janey", dates: "1951", vektr:1}
//     ]
//     },
//     { // Family 1
//     dad : { name: "Burt", dates: "1900", vektr:0},
//     mum : { name: "Mable", dates: "1901", vektr:0},
//     kids : [{ name: "Tommy", dates: "1950", vektr:2}
//     ]
//     },
//     { // Family 2
//     dad : { name: "Bob", dates: "1900-1988", vektr:0},
//     mum : { name: "Sarah", dates: "1910-1999", vektr:1},
//     kids : [{ name: "John", dates: "1930-2000", vektr:3},
//     { name: "Jane", dates: "1935-2010", vektr:3},
//     { name: "Lisa", dates: "1938", vektr:3}//NEXT
//     ]
//     },
//     { // Family 3
//     dad : { name: "Six Dad", dates: "1-6", vektr:1},
//     mum : { name: "Six Mum", dates: "2-7", vektr:0},
//     kids : [{ name: "One Child", dates: "1-1", vektr:2},
//     { name: "Two Child", dates: "2-2", vektr:2},
//     { name: "Three Child", dates: "3-3", vektr:0},
//     { name: "Four Child", dates: "4-4", vektr:1},
//     { name: "Five Child", dates: "5-5", vektr:2},
//     { name: "Six Child", dates: "6-6", vektr:0}
//     ]
//     }//NEXT//NEXT
// ]
// // draws a vertical line down from x,y position by h pixels
// function shortVertical(x,y,h) 
// {
//     return '<div class="vert"style="height:'+h+'px;top:'
//     + y + 'px;left:'+ x +'px"></div>';
// } // end of shortVertical fn

// // draws a complete parent block (400+hSpace)px wide,100px high. (nFamily is the index of
// // the families array, 'this' refers to the current button object, 
// // hSpace is the gap between the dad and the mum buttons).
// function parents(x,y,hSpace,nFamily)
// {
//     return '<button id="dad" onclick="klik(this,'+nFamily+')" style="position:absolute;left:'
//     + (x-200-hSpace/2) +'px;top:'+ y +'px;">'+families[nFamily].dad.name+
//     '<br>'+families[nFamily].dad.dates+
//     '</button><div id="tTop" class="hor"style="width:30px;top:'
//     + (y+30) +'px;left:'+ (x-hSpace/2) +
//     'px"></div><button id="mum" onclick="klik(this,'+nFamily+')"style="position:absolute;left:'
//     + (x+hSpace/2) +'px;top:'+ y +'px;">'+families[nFamily].mum.name+
//     '<br>'+families[nFamily].mum.dates
//     +'</button>'+ shortVertical(x,y+30,70)
// } // end of parents fn

// // draws a single child button on a vertical lolly stick (ht)px high, 200px wide
// function shortChild(n,x,y,ht,nFamily)
// {
//     return shortVertical(x,y,ht) + '<button id="kids['+n+']" onclick="kliq('
//     +n+','+  nFamily+')" style="position:absolute;left:'+(x-100)+
//     'px;top:'+(y+ht)+'px;">'+families[nFamily].kids[n].name+'<br>'
//     +families[nFamily].kids[n].dates+'</button>';
// } //end of shortChild fn

// // sets out family tree
// function tree(familyIndex)
// {
//     var panelHalf = window.innerHeight/2-30; // vertical position datum
//     var fullWidth = window.innerWidth;// full width of the visible screen
//     var panelMiddle = fullWidth/2; // centre line
    
//     var nkids = families[familyIndex].kids.length; // number of children 
    
//     //$("#panel").text($("#mainPanel").width());
//     //$("#panel2").text(nkids); // <<<<<<<<<<<<<<<<<<<< DEBUGGING VARIABLE!!!
// // console.log("nkids: "+nkids+" panel width: "+$("#mainPanel").width());//<<<

// // Loop to set out the children - START

//     var allTheKids = '';
//     if (fullWidth > (nkids * 210 + 10)) // wide screen, all children in a row.
//     {
//         var startPoint = panelMiddle-210*(nkids-1)/2; // horizontal position
//         for(i= 0 ; i < nkids; i++)
//         {
//             allTheKids = allTheKids + 
//             shortChild(i,(startPoint+(i*210)),panelHalf,70,familyIndex);
//         }
//         var crossPiece = '<div id="crossPiece" class="hor"style="width:'
//         +(nkids-1)*210+'px;top:'+ panelHalf +'px;left:'
//         + (panelMiddle-(nkids-1)*105) +'px"></div>';
//         return parents(panelMiddle,(panelHalf-100),30,familyIndex) + allTheKids + crossPiece;
//     }
//     else if (fullWidth > (nkids/2*220+10)) // mid-width screen, children in two rows
//     {
//         var startPoint = panelMiddle-220*(nkids-1)/4; // horizontal position
//         for(i=0 ; i < nkids; i++)
//         {
//             if(i&1) // test for odd number
//             {
//                 allTheKids = allTheKids +
//                 shortChild(i,(startPoint+(i*110)),panelHalf,150,familyIndex);
//             }
//             else
//              {
//                 allTheKids = allTheKids +
//                 shortChild(i,(startPoint+(i*110)),panelHalf,50,familyIndex);
//             }
//             var crossPiece = '<div id="crossPiece" class="hor"style="width:'
//         +(nkids-1)*110+'px;top:'+ panelHalf +'px;left:'
//         + (panelMiddle-(nkids-1)*55) +'px"></div>' ;          
//         }
//         var space = 30;
//         if (fullWidth<430){space=12}; // move parent buttons closer if space is tight
//         console.log("panelMiddle: "+panelMiddle+" fullWidth: "+fullWidth)
//         return parents(panelMiddle,(panelHalf-100),space,familyIndex) + allTheKids + crossPiece;
//     }
//     else // narrowest screen, children ranked vertically
//     {
//         var space = 30; //standard spacing between parents
//         if (fullWidth<440){space=12}; // move parent buttons closer if space is tight
//         var step = (340+space)/2/(nkids-1); // children appear in a stepped rank
//         // the first child comes below the dad
//         // NB child positioning is from the MIDDLE of the button
//         var kidsStart = panelMiddle-100-space/2;
//         var crossPieceLength = (fullWidth+space)/2; // crosspiece for each child
//         // drawn from the right
//         var crossPieceStart = 25; // a suitable distance from the right side
//         console.log("fullWidth: "+fullWidth+" nkids: "+nkids+" step: "+step); //<<<
//         var topScreen= 30; // topScreen is the gap above the parents buttons
//         for(i=0; i<nkids; i++)
//         {
//             allTheKids = allTheKids + // step down the screen: 65px height of parent block: 100px
//             shortChild(i,kidsStart+step*i,topScreen+70+i*65,0,familyIndex)+ // each child
//             // each crosspiece
//             '<div class="hor"style="width:'+(crossPieceLength-step*i)+'px;top:'
//             +(topScreen+100+i*65)+'px;right:'+crossPieceStart+'px"></div>';
//         }
        
//         return parents(panelMiddle,topScreen,space,familyIndex)+allTheKids;
//     }
// }
  
// // Loop to set out the children - END
    
    
    

// // Click function for each parent
// // (person object in a family object in the families array)
// function klik(person,thisFamily)
// {
//     $("#mainPanel").html(tree(families[thisFamily][person.id].vektr));
// }

// // Click function for each child 
// // (child object in a kids array in a family object in the families array)
// function kliq(n,thisFamily)
// {
//     $("#mainPanel").html(tree(families[thisFamily].kids[n].vektr));
// }

// //       <<<<<<<<<<<<<<<<<<<<<<=== START HERE ===>>>>>>>>>>>>>>>>>>>>>>

// $(document).ready(function()
// {
//     $("#mainPanel").html(tree(0));

// }); // end of document ready function


