//  title: familyStory.js
// author: David Kent (dk.davidkent@gmail.com)

const families = [
    
    { // Family 0
    records : ['photos'],
    dad : { name: "Herbert West", dates: "1877-1958", vektr:6},
    mum : { name: "Jessie Smith", dates: "1882-1973", vektr:7},
    kids : [{ name: "Doris Audrey", dates: "1906-1988", vektr:99},
    { name: "Leonard Aubrey", dates: "1908-1991", vektr:99},
    { name: "Joyce Evelyn", dates: "1911-19??", vektr:99},
    { name: "Cyril Reginald", dates: "1913-2002", vektr:99},
    { name: "Phyllis Mary", dates: "1916-1991", vektr:99},
    { name: "Joan Olive", dates: "1916-1981", vektr:1}//NEXT kid - kd
    ], // Add census info - csus
    photos: [{picture:'https://www.dropbox.com/scl/fi/cpbnh3jau8ljb7pvn9jx7/westsLyncombrHl.jpg?rlkey=r6t3uojdogmk87wa9vbog11cm&raw=1',
    ratio:1.5,
    caption:'1940s West family at 73 Lyncombe Hill',
    thumbnail:'https://www.dropbox.com/scl/fi/7yng3ewwyr4hf5i13kw33/westsLync_thumb.jpg?rlkey=ayfvuf3celjjkm3yx0q2z2mfo&raw=1',
    alt:'West family at Lyncombe Hill'}],
    familyName: 'Herbert &#38; Jessie West family', //use &amp; between dad and mum names
    },
    { // Family 1
    records : ['empty'],
    dad : { name: "Charles Kent", dates: "1911-1989", vektr:5},
    mum : { name: "Joan West", dates: "1916-1981", vektr:0},
    kids : [{ name: "Peter Nicholas", dates: "1947", vektr:2},
    { name: "David Jonathan", dates: "1950", vektr:3},
    { name: "Simon James", dates: "1955", vektr:4}//NEXT kid - kd
    ] // Add census info - csus
    },
    { // Family 2
    records : ['empty'],
    dad : { name: "Peter Kent", dates: "1947", vektr:1},
    mum : { name: "Ann", dates: "19??", vektr:99},
    kids : [{ name: "Katherine", dates: "19??", vektr:99},
    { name: "Leah", dates: "19??", vektr:99}//NEXT kid - kd
    ] // Add census info - csus
    },
    { // Family 3
    records : ['empty'],
    dad : { name: "David Kent", dates: "1950", vektr:1},
    mum : { name: "Helen Atkinson", dates: "1956", vektr:99},
    kids : [{ name: "Benjamin", dates: "1980", vektr:99},
    { name: "Nicola Claire", dates: "1983", vektr:99},
    { name: "Gavin David", dates: "1985", vektr:99}//NEXT kid - kd
    ] // Add census info - csus
    },
    { // Family 4
    records : ['empty'],
    dad : { name: "Simon Kent", dates: "1955", vektr:1},
    mum : { name: "Susan", dates: "195?", vektr:99},
    kids : [{ name: "Jessica", dates: "19??", vektr:99}//NEXT kid - kd
    ] // Add census info - csus
    },
    { // Family 5
    records : ['censuses'],
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
    images:{wide:'https://www.dropbox.com/scl/fi/xgbhkj2jpw6tfic9atbuo/Census1901AKent01.jpg?rlkey=2nbkhjyx4k2tv54bcyyznr8y3&raw=1',
    narrow:'https://www.dropbox.com/scl/fi/zhawn8mwvvm2qsrq62hs9/Census1901AKentV01.jpg?rlkey=6l6ssmanwl3w60ssvd9y88hx2&raw=1',
    zoomed: 'https://www.dropbox.com/scl/fi/cf7z9te125h5hqvee92ug/Census1901AKentVz02.jpg?rlkey=tjf2gjl83git711mtrcyyqjzz&raw=1'}},
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
    records : ['censuses'],
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
    images:{wide:'https://www.dropbox.com/scl/fi/x9czjb9v68bnbkfktd714/Census1901WWest01.jpg?rlkey=c7x6z5o9cdkrgo5t9jw9o354a&raw=1',
    narrow:'https://www.dropbox.com/scl/fi/orc9u5mo0jbw2by9tbi53/Census1901WWestV01.jpg?rlkey=gki5jprhpt3eyrnu42rytquc5&raw=1',
    zoomed: 'https://www.dropbox.com/scl/fi/two1xu25kzqglleaq66br/Census1901WWestVz01.jpg?rlkey=a6fskmad6widthify7ziqqng1&raw=1'}} // Add a year - cyr
    ]} // New address - cadd
    ],
    familyNotes: '', // include <p></p> // Add census info - csus
    },
    { // Family 7
    records : ['censuses','photos'],
        
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
    zoomed: 'https://www.dropbox.com/scl/fi/f45dd9q0r5hua2ntb3yog/Census1891WSmithV02.jpg?rlkey=y44ni29ywxs029x5q96fyyh4y&raw=1'}} // Add a year - cyr
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
    Jessie\'s occupation was Dressmaker</p>',// include <p></p>
    photos:[{picture:'https://www.dropbox.com/scl/fi/3jxzhb7up0111taukr7th/The_Portland_Arms01.jpg?rlkey=1qgn7ai1b5i12nb0j0nss7fyc&raw=1',
    ratio:0.793,
    caption:'The Portland Arms, photograph 1947, demolished 1969.',
    thumbnail:'https://www.dropbox.com/scl/fi/9paai8gnv8eh28yc1waua/PortlandArmsThumb.jpg?rlkey=irgkbve6l9vfrzbd39u25g8ot&raw=1',
    alt:"Portland Arms, Bath 1947"}
    ]
    
    },
    { // Family 8
    records : ['empty'],
    dad : { name: "Henry Hasler", dates: "1826-1???", vektr:99},
    mum : { name: "Mary Ann", dates: "1829-1???", vektr:99},
    kids : [{ name: "Martha Louisa", dates: "1852-1935", vektr:7},
    { name: "William Peter", dates: "1854-1936", vektr:11},
    { name: "Eliza", dates: "1856-1???", vektr:99},
    { name: "Thomas", dates: "1859-1???", vektr:99}//NEXT kid - kd
    ] // Add census info - csus
    },
    { // Family 9
    records : ['censuses'],
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
    images:{wide:'https://www.dropbox.com/scl/fi/x64wbg7p7cppfzoh788xe/JKent1851Census01.jpg?rlkey=nlg2i8a3h8r50r3tlyhpu4ger&raw=1',
    narrow:'https://www.dropbox.com/scl/fi/7o8kepxpypmuigct6ract/JKent1851CensusV01.jpg?rlkey=436t7rfjcmegt3z6d69qyl2zi&raw=1',
    zoomed: 'https://www.dropbox.com/scl/fi/yo5x7xz6yfg5plo2o6v6p/JKent1851CensusVz01.jpg?rlkey=fr51u8ye7m34ojqtx4t7hxz8k&raw=1'}},
    {year:'1861',
    occupation: '1861 &#9474; John Kent 41, Agricultural Lab; Elizabeth 39, Wife; George 16, Ag Lab; MaryAnn 13; Reuben 10; Martha 7',
    images:{wide:'https://www.dropbox.com/scl/fi/smwizf31j8aoblk5ogwer/JKent1861Census01.jpg?rlkey=s5m9ob1km3e6nwy4yq38t2r2u&raw=1',
    narrow:'https://www.dropbox.com/scl/fi/jtd874fnnaz9gnkuyhkup/JKent1861CensusV01.jpg?rlkey=nbkwaqdhkl43pzqmnhk03sl0b&raw=1',
    zoomed: 'https://www.dropbox.com/scl/fi/tojax7rw5ocw34qsgip9v/JKent1861CensusVz01.jpg?rlkey=1l4h2w9nurgryeyxw22tx5xsb&raw=1'}} // Add a year - cyr
    ]} // New address - cadd
    ],
    familyNotes: '', // include <p></p> // Add census info - csus
    },
    { // Family 10
    records : ['censuses'],
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
    a major centre of the railway industry. In the 1871 and 1881 censuses George's occupation was then shown as \'Railway Labourer\'.\
    In 1891 it was \'Shed Labourer\'.\
    The Great Western Railway had reached Didcot around 30 years previously. Hagbourne Newtown was a settlement built for the \
    rapidly expanding population.\
    <a href='https://www.didcot.gov.uk/brief-history#heading-1047124'> (see Didcot brief history).</a><\p>\
    <p>After moving to Bath, his occupation was \'stationary engine driver\' (in the 1901 census) and \'engine driver gas works\'\
     (in 1911).",
    },
    
    { // Family 11
    records : ['empty'],
    dad : { name: "William Hasler", dates: "1854-1936", vektr:8},
    mum : { name: "Maria Baker", dates: "1856-1934", vektr:99},
    kids : [{ name: "Douglas William", dates: "1882-1965", vektr:12},
    { name: "Beatrice Ethel", dates: "1884-19??", vektr:99}//NEXT kid - kd
    ]// Add census info - csus
    },
    { // Family 12
    records : ['empty'],
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


