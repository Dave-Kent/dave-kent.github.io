//  title: familyStory.js
// author: David Kent (dk.davidkent@gmail.com)

const families = [
    
    { // Family 0
        census : 0,
    dad : { name: "Herbert West", dates: "1877-1958", vektr:6},
    mum : { name: "Jessie Smith", dates: "1882-1973", vektr:7},
    kids : [{ name: "Doris Audrey", dates: "1906-1988", vektr:99},
    { name: "Leonard Aubrey", dates: "1908-1991", vektr:99},
    { name: "Joyce Evelyn", dates: "1911-19??", vektr:99},
    { name: "Cyril Reginald", dates: "1913-2002", vektr:99},
    { name: "Phyllis Mary", dates: "1916-1991", vektr:99},
    { name: "Joan Olive", dates: "1916-1981", vektr:1}//NEXT kid - kd
    ] // Add census info - csus
    },
    { // Family 1
        census : 0,
    dad : { name: "Charles Kent", dates: "1911-1989", vektr:5},
    mum : { name: "Joan West", dates: "1916-1981", vektr:0},
    kids : [{ name: "Peter Nicholas", dates: "1947", vektr:2},
    { name: "David Jonathan", dates: "1950", vektr:3},
    { name: "Simon James", dates: "1955", vektr:4}//NEXT kid - kd
    ] // Add census info - csus
    },
    { // Family 2
        census : 0,
    dad : { name: "Peter Kent", dates: "1947", vektr:1},
    mum : { name: "Ann", dates: "19??", vektr:99},
    kids : [{ name: "Katherine", dates: "19??", vektr:99},
    { name: "Leah", dates: "19??", vektr:99}//NEXT kid - kd
    ] // Add census info - csus
    },
    { // Family 3
        census : 0,
    dad : { name: "David Kent", dates: "1950", vektr:1},
    mum : { name: "Helen Atkinson", dates: "1956", vektr:99},
    kids : [{ name: "Benjamin", dates: "1980", vektr:99},
    { name: "Nicola Claire", dates: "1983", vektr:99},
    { name: "Gavin David", dates: "1985", vektr:99}//NEXT kid - kd
    ] // Add census info - csus
    },
    { // Family 4
        census : 0,
    dad : { name: "Simon Kent", dates: "1955", vektr:1},
    mum : { name: "Susan", dates: "195?", vektr:99},
    kids : [{ name: "Jessica", dates: "19??", vektr:99}//NEXT kid - kd
    ] // Add census info - csus
    },
    { // Family 5
        census : 1,
    dad : { name: "Albert Kent", dates: "1873-1954", vektr:10},
    mum : { name: "Mary Frapwell", dates: "1874-19??", vektr:99},
    kids : [{ name: "Dorothy", dates: "1892-19??", vektr:99},
    { name: "Charles", dates: "1911-1989", vektr:1}//NEXT kid - kd
    ],
    familyName: 'Albert &#38; Mary Kent family', //use &amp; between dad and mum names
    censuses:[{address:'10 Ayr Street, Twerton, Bath',
    gmap:'https://maps.app.goo.gl/8GVeXvyN74WwPpuh8',
    dox:[{year:'1901',
    occupation: '1901 &#9474; Albert Kent 28, General Labourer; Mary 27, Wife; Dorothy 9 months',
    images:{wide:'https://www.dropbox.com/scl/fi/fthd3myesvsbrz9ucwn24/Census1901AKent.jpg?rlkey=g4mfxbthlzpdfy0vpgedhr4af&raw=1',
    narrow:'https://www.dropbox.com/scl/fi/u3yo12eq09ywprwwy4m20/Census1901AKentV.jpg?rlkey=c5y31fjf73ogup3xep25qvc3o&raw=1',
    zoomed: ''}},
    {year:'1911',
    occupation: '1911 &#9474; Albert Kent 38, Main Layer Gas Works; Mary 37 wife; Dorothy Kate 10', // include &#9474; after the year
    images:{wide:'https://www.dropbox.com/scl/fi/ehe0r7g8t5obtgfsm1udp/AlbertKent1911rg14_14665_0545_03.jpg?rlkey=4tplqhqz8k09sbxmgkfgeqods&raw=1',
    narrow:'https://www.dropbox.com/scl/fi/rlnu1qk4vuolpcuz50kvj/AlbertKent1911rg14_14665_0545_03V.jpg?rlkey=xo7jeouevxm8ezxtgwn9rvws3&raw=1',
    zoomed: 'https://www.dropbox.com/scl/fi/1uhqkdxgbytvdvt7y16fz/AlbertKent1911rg14_14665_0545_03Vz.jpg?rlkey=bd3004apevloot99notfx3t3k&raw=1'}} // Add a year - cyr
    ]} // New address - cadd
    ],
    familyNotes: '', // include <p></p> // Add census info - csus
    },
    { // Family 6
        census : 1,
    dad : { name: "Walter West", dates: "1855-1933", vektr:99},
    mum : { name: "Emma Keats", dates: "1855-19??", vektr:99},
    kids : [{ name: "William", dates: "1873-1???", vektr:99},
    { name: "Ella", dates: "1875-1???", vektr:99},
    { name: "Herbert Walter", dates: "1877-1958", vektr:0},
    { name: "William James", dates: "1880-1???", vektr:99},
    { name: "Thomas", dates: "1883-1915", vektr:99},
    { name: "Emma Rose", dates: "1885-1???", vektr:99},
    { name: "George", dates: "1887-1???", vektr:99},
    { name: "Emily Rose", dates: "1888-1???", vektr:99},
    { name: "Reginald Edward", dates: "1895-19??", vektr:99}//NEXT kid - kd
    ],
    familyName: 'Walter &#38; Emma West family', //use &amp; between dad and mum names
    censuses:[{address:'23 Fieldings Road, Twerton, Bath',
    gmap:'https://maps.app.goo.gl/ZMQka9ttxYea981z8',
    dox:[{year:'1901',
    occupation: '1901 &#9474; Walter West 46, Blacksmiths Labourer; Emma 46, Wife; James 20, Fitter Clothing Factory; Thomas 18, Labourer Iron Foundery; + girls 12,9, boy 6',
    images:{wide:'https://www.dropbox.com/scl/fi/doxes43xsbcxbbv52idiv/Census1901WWest.jpg?rlkey=acd0ljfsdo43uqi7zhu1g7in5&raw=1',
    narrow:'https://www.dropbox.com/scl/fi/36crva4nqf9djftyoooca/Census1901WWestV.jpg?rlkey=mtgw2iebopd0uo4smw2i5to93&raw=1',
    zoomed: ''}} // Add a year - cyr
    ]} // New address - cadd
    ],
    familyNotes: '', // include <p></p> // Add census info - csus
    },
    { // Family 7
        census : 1,
    dad : { name: "William Smith", dates: "1851-19??", vektr:99},
    mum : { name: "Martha Hasler", dates: "1852-1935", vektr:8},
    kids : [{ name: "Jessica Alice Annie", dates: "1882-1973", vektr:0}//NEXT kid - kd
    ],
    familyName: 'William &amp; Martha Louisa Smith family', //use &amp; between dad and mum names
    censuses:[{address:'Somerset Industrial Home for Boys, Bath',
    gmap:'https://maps.app.goo.gl/c7k6ctM4kk3wvq9N7',
    dox:[{year:'1891',
    occupation: '1891 &#9474; William Smith 40, Carpenter; Louisa 38, Nurse; Jessie 9, Scholar',
    images:{wide:'https://www.dropbox.com/scl/fi/l7xznsdav3l9wfle3sz48/Census1891WSmith.jpg?rlkey=zqwjj4s0khe1htdrwmlon52y1&raw=1',
    narrow:'https://www.dropbox.com/scl/fi/gi4jfkeenn2arhg7n1ro2/Census1891WSmithV.jpg?rlkey=myoqaq4llbvja6e0qivz8emtj&raw=1',
    zoomed: 'https://www.dropbox.com/scl/fi/gnzgyt0bnb0wxh5qozja2/Census1891WSmithVz.jpg?rlkey=hypzzpakjvvesu9ap2fdgb526&raw=1'}} // Add a year - cyr
    ]},
    {address:'12a Portland Place, Bath',
    gmap:'https://maps.app.goo.gl/AChpVU1iQi4ewmGz9',
    dox:[{year:'1901',
    occupation: '1901 &#9474; William Smith 50, Carpenter &amp; Licenced Victualler; Louisa 49, Pub own account; Jessie A. 19, Dressmaker',
    images:{wide:'https://www.dropbox.com/scl/fi/xfvj77b74ymx7bl8or11i/Census1901WSmith.jpg?rlkey=zynlgyx19t3bhxdv8l8w9lmoe&raw=1',
    narrow:'https://www.dropbox.com/scl/fi/m6bnb30twlnxsghk4ddh0/Census1901WSmithV.jpg?rlkey=wq9s90ozkjnzba00nffvluz3y&raw=1',
    zoomed: 'https://www.dropbox.com/scl/fi/c1arkxd2gfuzg9q2bf7r9/Census1901WSmithVz.jpg?rlkey=r0iwv2zgk6ji689cnnrvwvkhf&raw=1'}}
    // Add a year ^cyr
    ]} // New address - cadd
    ],
    familyNotes: '<p>William Smith served in the Royal Engineers, daughter Jessie was born in Aldershot (main garrison of the British Army) \
    in 1882.</p><p>After leaving the Army, the family moved to Bath and in the 1891 census his occupation is shown as Carpenter at the \
    <a href="https://www.childrenshomes.org.uk/BathIH/index.shtml">Somerset Industrial Home for Boys</a> where wife Martha Louisa was employed \
    as a nurse.</p><p>The next census (1901) shows that the couple were then licencees of the Portland Arms, Bath. William was still a carpenter and \
    Jessie\'s occupation was Dressmaker</p>\
    <figure class="notes-fig"><img class="notes-pic" src="https://www.dropbox.com/scl/fi/rvepq9ob7glenrs8uj7su/The_Portland_Arms-_Portland_Place-_Bath_PD.jpg?rlkey=i0twz8j0ov5omwrznutjewlhw&raw=1"\
    alt="Portland Arms, Bath 1947"><figcaption>The Portland Arms, photo 1947, demolished 1969</figcaption></figure>', // include <p></p>
    },
    { // Family 8
        census : 0,
    dad : { name: "Henry Hasler", dates: "1826-1???", vektr:99},
    mum : { name: "Mary Ann", dates: "1829-1???", vektr:99},
    kids : [{ name: "Martha Louisa", dates: "1852-1935", vektr:7},
    { name: "William Peter", dates: "1854-1936", vektr:11},
    { name: "Eliza", dates: "1856-1???", vektr:99},
    { name: "Thomas", dates: "1859-1???", vektr:99}//NEXT kid - kd
    ] // Add census info - csus
    },
    { // Family 9
        census : 1,
    dad : { name: "John Kent", dates: "1820-1???", vektr:99},
    mum : { name: "Elizabeth", dates: "1818-1???", vektr:99},
    kids : [{ name: "George", dates: "1845-1???", vektr:10},
    { name: "Mary Ann", dates: "1848-1???", vektr:99},
    { name: "Reuben", dates: "1851-1???", vektr:99},
    { name: "Martha", dates: "1854-1???", vektr:99}//NEXT kid - kd
    ],
    familyName: 'John &#38; Elizabeth Kent family', //use &amp; between dad and mum names
    censuses:[{address:'Old Moor, Milton, Berkshire',
    gmap:'https://goo.gl/maps/jGsTm1gXRZo2dM8C7',
    dox:[{year:'1851',
    occupation: '1851 &#9474; John Kent 33, Agricultural Lab; Elizabeth 29, Wife; George 6; MaryAnn 3; Reuben 4M',
    images:{wide:'https://www.dropbox.com/scl/fi/wn1d7id0kr9rys4qhhxpk/GKent1851Census.jpg?rlkey=0zynkmdcx05tc6lxjw6hm6a7b&raw=1',
    narrow:'https://www.dropbox.com/scl/fi/8v2m2zn4fr62rhojuqk28/GKent1851CensusV.jpg?rlkey=pjgvlinyzqa91c4nwdmdawvxg&raw=1',
    zoomed: ''}},
    {year:'1861',
    occupation: '1861 &#9474; John Kent 41, Agricultural Lab; Elizabeth 39, Wife; George 16, Ag Lab; MaryAnn 13; Reuben 10; Martha 7',
    images:{wide:'https://www.dropbox.com/scl/fi/e0fcqzv2cbo6h8vpiasyn/GKent1861Census.jpg?rlkey=e492pwimet6ccyfym7aa2eew4&raw=1',
    narrow:'https://www.dropbox.com/scl/fi/gd1481ww7vxgqc558sqj4/GKent1861CensusV.jpg?rlkey=t639u857dq10o2bh0f2zqco1p&raw=1',
    zoomed: ''}} // Add a year - cyr
    ]} // New address - cadd
    ],
    familyNotes: '', // include <p></p> // Add census info - csus
    },
    { // Family 10
    census : 1,
    dad : { name: "George Kent", dates: "1847-1927", vektr:9},
    mum : { name: "Mary", dates: "1849-1???", vektr:99},
    kids : [{ name: "Henry", dates: "1870-1???", vektr:99},
    { name: "Charles", dates: "1872-1???", vektr:99},
    { name: "Albert", dates: "1873-1954", vektr:5},
    { name: "Louisa", dates: "1875-1???", vektr:99},
    { name: "Herbert", dates: "1884-1???", vektr:99}//NEXT kid - kd
    ],
    familyName : "George &amp; Mary Ann Kent family",
    censuses:[{address:"Hagbourne Newtown, Didcot", 
    gmap:"https://maps.app.goo.gl/TRnEfAqipQMQWz8EA",
    dox:[{year:"1871",
    occupation:"1871 &#9474; George Kent 25, Railway Labourer - Mary 23, Wife - Henry 1",
    images:{wide:"https://www.dropbox.com/scl/fi/lv4eq07ktsb976tdtzrne/GKent1871Census.jpg?rlkey=fcmak4znbfl9pvkvir79l09fs&raw=1",
    narrow:"https://www.dropbox.com/scl/fi/aig0f32b7oxac0zum72jb/GKent1871CensusV.jpg?rlkey=ldr5v7yplhn74vpauuaoq8mvd&raw=1",
    zoomed:"https://www.dropbox.com/scl/fi/gdhdx7yq8ujyv7ma2xgx2/GKent1871CensusVz.jpg?rlkey=qh0jyuz3wn5x88dzkezb9i3h2&raw=1"}},
    {year:"1881",
    occupation:"1881 &#9474; George Kent 34, Railway Labr - Mary 32, Wife - Henry 11, Charles 9, Albert 8, Louisa 6",
    images:{wide:'https://www.dropbox.com/scl/fi/8l3u3r284ws4i8sjmt973/GKent1881Census.jpg?rlkey=ql562oyar9dx4vy0q9ht3axrk&raw=1',
    narrow:'https://www.dropbox.com/scl/fi/a3139kmqtv8bgi3tpy7s7/GKent1881CensusV.jpg?rlkey=bvlyqyratfz96l97uze1m8p8p&raw=1',
    zoomed:'https://www.dropbox.com/scl/fi/hlr2xm7cqaxireew9oafu/GKent1881CensusVz.jpg?rlkey=f13r5r58xdso6gmlhx27a8eyn&raw=1'}},
    {year:"1891",
    occupation:"1891 &#9474; George Kent 44, Shed Labourer - Mary 42, Wife - Charles 19, Locomotive Fireman - Herbert 7",
    images:{wide:'https://www.dropbox.com/scl/fi/dbijhrbvwtzwncfprrube/GKent1891Census.jpg?rlkey=euzj5ozwysl939906zdm1zndz&raw=1',
        narrow:'https://www.dropbox.com/scl/fi/yjm2i59664777trtwvz2p/GKent1891CensusV.jpg?rlkey=ky213za7shi5w5617ii39kxej&raw=1',
        zoomed:'https://www.dropbox.com/scl/fi/fxsolavoztv43rcmfvepf/GKent1891CensusVz.jpg?rlkey=bz9hp5yl2js5xmlqcnhufnld5&raw=1'}}]
    },
    {address:"4 Ayr Street, Twerton, Bath",
    gmap:"https://maps.app.goo.gl/w1tVUeGy2BMw65NQ9",
    dox:[{year:"1901",
    occupation:"1901 &#9474; George Kent 55, Stationary Engine Driver - Mary 53, Wife - Herbert 17, Steam Engine Fitter",
    images:{wide:'https://www.dropbox.com/scl/fi/tpd07czplrlesdwcq266h/GKent1901Census.jpg?rlkey=or6xg8bixllmtel0t4w86z95p&raw=1',
        narrow:'https://www.dropbox.com/scl/fi/bh1mpsb2qk9kr7un6ot66/GKent1901CensusV.jpg?rlkey=yjglphk2es58bz0afev1kf4z9&raw=1',
        zoomed:'https://www.dropbox.com/scl/fi/vc644ie8qujq5b6rh0jfq/GKent1901CensusVz.jpg?rlkey=76h23n1idnbjsom7jn9c2uv15&raw=1'}},
    {year:"1911",
    occupation:"1911 &#9474; George Kent 64, Engine Driver Gas Works - Mary 62, Wife",
    images:{wide:'https://www.dropbox.com/scl/fi/fw5ef2nf0paqoo5t77v7u/GKent1911Census.jpg?rlkey=sk6ta3adblcatnfpwu3639mam&raw=1',
        narrow:'https://www.dropbox.com/scl/fi/1x9op85k51rxldxyeewff/GKent1911CensusV.jpg?rlkey=5e6xrmv9xdphu1dmpkg1684sy&raw=1',
        zoomed:'https://www.dropbox.com/scl/fi/iatylo7z1tr2h8b9ucwat/GKent1911CensusVz.jpg?rlkey=66zyk7t42rsgbl64bpivqb9uz&raw=1'}}]}],
    familyNotes: "<p>Between 1871 and 1891, George and his family lived near Didcot, at that time\
    a major centre of the railway industry. George's occupation was then shown as \'railway labourer\'.\
    The Great Western Railway had reached the town around 30 years previously. Hagbourne Newtown was a settlement built for the \
    rapidly expanding population.\
    <a href='https://www.didcot.gov.uk/brief-history#heading-1047124'> (see Didcot brief history).</a>\
    <\p>\
    <p>After moving to Bath, his occupation was \'stationary engine driver\' (in the 1901 census) and \'engine driver gas works\'\
     (in 1911).",
    },
    
    { // Family 11
        census : 0,
    dad : { name: "William Hasler", dates: "1854-1936", vektr:8},
    mum : { name: "Maria Baker", dates: "1856-1934", vektr:99},
    kids : [{ name: "Douglas William", dates: "1882-1965", vektr:12},
    { name: "Beatrice Ethel", dates: "1884-19??", vektr:99}//NEXT kid - kd
    ]// Add census info - csus
    },
    { // Family 12
        census : 0,
    dad : { name: "Douglas Hasler", dates: "1882-1965", vektr:11},
    mum : { name: "Violet Collins", dates: "1886-1968", vektr:99},
    kids : [{ name: "Joan Mary", dates: "1924-2022", vektr:99}//NEXT kid - kd
    ] // Add census info - csus
    }//NEXT family - fm
    ]

// ========== controls for the navigation sidebar =============
function openNav() {
    document.getElementById("mySidenav").style.left = "0";
}
function closeNav() {
    document.getElementById("mySidenav").style.left = "-250px";
}
// ============ controls for zoomed-in pictures ==============
function showDetail(pic) {
    let picture = document.getElementById(pic);
    picture.style.zIndex="4";
    picture.style.opacity="1";
    showCover(0.6);
}

function hideDetail(pic) {
    hideCover();
    var picture = document.getElementById(pic);
    picture.style.opacity="0";
    setTimeout(function() {
        picture.style.zIndex="-3";
    }, 1000); 
}

// === control for semi-transparent cover ===
function showCover(umbra) {
    var screen = document.getElementsByClassName("cover");
    screen[0].style.height="100vh";
    screen[0].style.opacity= umbra;
}
function hideCover() {
    var screen = document.getElementsByClassName("cover");
    screen[0].style.height="0"
    screen[0].style.opacity="0"
}


