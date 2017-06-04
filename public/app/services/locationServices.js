angular.module('locationServices',[])

.factory('Areas', function() {
  var polyArray = [];
  var cslcCoords = [
    new google.maps.LatLng(10.495180687387377, -66.8445311486721),
    new google.maps.LatLng(10.495346839528478, -66.84439167380333),
    new google.maps.LatLng(10.495845295416235, -66.84455260634422),
    new google.maps.LatLng(10.49594551396333, -66.84424683451653),
    new google.maps.LatLng(10.49591122867455, -66.84423878788948),
    new google.maps.LatLng(10.495995623224701, -66.84401616454124),
    new google.maps.LatLng(10.49608792973755, -66.8438820540905),
    new google.maps.LatLng(10.49617232423947, -66.84358432888985),
    new google.maps.LatLng(10.496188148206022, -66.84335365891457),
    new google.maps.LatLng(10.496177598895082, -66.84318736195564),
    new google.maps.LatLng(10.49550507957989, -66.84320345520973),
    new google.maps.LatLng(10.495399586221275, -66.84315785765648),
    new google.maps.LatLng(10.495383762214377, -66.84353604912758),
    new google.maps.LatLng(10.495370575541353, -66.84398666024208),
    new google.maps.LatLng(10.495143764677229, -66.84448823332787)
  ];
  var Cslc = new google.maps.Polygon({
    paths: cslcCoords,
    strokeColor: '#000000',
    strokeOpacity: 0.8,
    strokeWeight: 1,
    fillColor: '#FF0000',
    fillOpacity: 0.7,
    zonetype: 'E'
  });
  polyArray.push(Cslc);
  //
  // var ArufloCoords = [
  //   new google.maps.LatLng(10.490702457965472, -66.84556514024734),
  //   new google.maps.LatLng(10.49072355696042, -66.84566169977188),
  //   new google.maps.LatLng(10.490987294276058, -66.84566169977188),
  //   new google.maps.LatLng(10.49088179937678, -66.84502333402634),
  //   new google.maps.LatLng(10.490639160971948, -66.8450340628624),
  //   new google.maps.LatLng(10.490648412071813, -66.84510899965579),
  //   new google.maps.LatLng(10.490570589214355, -66.84510916471481),
  //   new google.maps.LatLng(10.490549490208961, -66.8450179696083),
  //   new google.maps.LatLng(10.490285752520169, -66.84504479169846),
  //   new google.maps.LatLng(10.490385972868388, -66.84560269117355),
  //   new google.maps.LatLng(10.490612787220831, -66.84562548995018),
  //   new google.maps.LatLng(10.490618061971235, -66.84556648135185)
  // ];
  // var ArufloCentral = new google.maps.Polygon({
  //   paths: ArufloCoords,
  //   strokeColor: '#000000',
  //   strokeOpacity: 0.8,
  //   strokeWeight: 1,
  //   fillColor: '#FF0000',
  //   fillOpacity: 0.7,
  //   zonetype: 'P'
  // });
  // polyArray.push(ArufloCentral);
  //
  // var ClinicaCoord = [
  //   new google.maps.LatLng(10.494840470819938, -66.84543505311012),
  //   new google.maps.LatLng(10.494429045633824, -66.84606000781059),
  //   new google.maps.LatLng(10.494239156901802, -66.8461699783802),
  //   new google.maps.LatLng(10.49358509482147, -66.8462236225605),
  //   new google.maps.LatLng(10.493645753862914, -66.84517487883568),
  //   new google.maps.LatLng(10.49392795011671, -66.84512659907341),
  //   new google.maps.LatLng(10.493914763381596, -66.8455021083355),
  //   new google.maps.LatLng(10.494107289658205, -66.84549942612648),
  //   new google.maps.LatLng(10.494254980967272, -66.84512123465538),
  //   new google.maps.LatLng(10.494727065214308, -66.84534922242165)
  // ];
  // var Clinica = new google.maps.Polygon({
  //   paths: ClinicaCoord,
  //   strokeColor: '#000000',
  //   strokeOpacity: 0.8,
  //   strokeWeight: 1,
  //   fillColor: '#FF0000',
  //   fillOpacity: 0.7,
  //   zonetype: 'R3'
  // });
  // polyArray.push(Clinica);
  //
  // var LaEstanciaCoords = [
  //   new google.maps.LatLng(10.495449695571104, -66.84801399707794),
  //   new google.maps.LatLng(10.493508611665307, -66.84794962406158),
  //   new google.maps.LatLng(10.493571908071765, -66.84670776128769),
  //   new google.maps.LatLng(10.494057180090902, -66.84670776128769),
  //   new google.maps.LatLng(10.494073004165655, -66.84627324342728),
  //   new google.maps.LatLng(10.4942708050319, -66.84623166918755),
  //   new google.maps.LatLng(10.494458056402065, -66.84611365199089),
  //   new google.maps.LatLng(10.494436957661787, -66.84633895754814),
  //   new google.maps.LatLng(10.495845295416235, -66.8465293943882)
  // ];
  // var LaEstancia = new google.maps.Polygon({
  //   paths: LaEstanciaCoords,
  //   strokeColor: '#000000',
  //   strokeOpacity: 0.8,
  //   strokeWeight: 1,
  //   fillColor: '#FF0000',
  //   fillOpacity: 0.7,
  //   zonetype: 'AE-C3-1'
  // });
  // polyArray.push(LaEstancia);
var R4Coord = [
      new google.maps.LatLng(10.495312554173342, -66.84417843818665),
      new google.maps.LatLng(10.495149039350382, -66.84450030326843),
      new google.maps.LatLng(10.495075193918113, -66.84443056583405),
      new google.maps.LatLng(10.495201786076903, -66.84408187866211),
      new google.maps.LatLng(10.495307279502976, -66.84418112039566)
    ];
    var R4 = new google.maps.Polygon({
      paths: R4Coord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R4'
    });
    polyArray.push(R4);
var R3ECoord = [
    new google.maps.LatLng(10.495043545870331, -66.84438496828079),
new google.maps.LatLng(10.495259807465702, -66.84412211179733),
new google.maps.LatLng(10.495151676686922, -66.84392899274826),
new google.maps.LatLng(10.494990799116815, -66.84388071298599),
new google.maps.LatLng(10.494919590985296, -66.84405237436295),
new google.maps.LatLng(10.49483783348074, -66.84417307376862),
new google.maps.LatLng(10.495043545870331, -66.84439033269882)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
    new google.maps.LatLng(10.494721790533951, -66.84408456087112),
new google.maps.LatLng(10.494877393566293, -66.84380829334259),
new google.maps.LatLng(10.494982887103, -66.84388339519501),
new google.maps.LatLng(10.494919590985296, -66.84404969215393),
new google.maps.LatLng(10.494835196141532, -66.84417575597763),
new google.maps.LatLng(10.494727065214308, -66.8440979719162)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);
var R3ECoord = [
    new google.maps.LatLng(10.49471651585352, -66.84408724308014),
new google.maps.LatLng(10.494877393566293, -66.84380829334259),
new google.maps.LatLng(10.494882668243978, -66.84354275465012),
new google.maps.LatLng(10.494592560837422, -66.84398800134659),
new google.maps.LatLng(10.494716753789264, -66.84408683051777)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);


var R3ECoord = [
    new google.maps.LatLng(10.494882668243978, -66.84354275465012),
new google.maps.LatLng(10.49458728615479, -66.8439906835556),
new google.maps.LatLng(10.494431682976497, -66.84389144182205),
new google.maps.LatLng(10.494711241173, -66.84345424175262),
new google.maps.LatLng(10.494881638123676, -66.84354429530629)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
   new google.maps.LatLng(10.494426408291117, -66.84389412403107),
new google.maps.LatLng(10.494705966492377, -66.84345960617065),
new google.maps.LatLng(10.494568824764857, -66.84337109327316),
new google.maps.LatLng(10.49425761831143, -66.84378147125244),
new google.maps.LatLng(10.494423770948394, -66.84389144182205)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
 new google.maps.LatLng(10.49425234362307, -66.84378147125244),
new google.maps.LatLng(10.494568824764857, -66.84337109327316),
new google.maps.LatLng(10.49433410128238, -66.84330940246582),
new google.maps.LatLng(10.49408882823962, -66.84370368719101),
new google.maps.LatLng(10.494252483567045, -66.8437812890769)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);



var R3ECoord = [
new google.maps.LatLng(10.494086190894013, -66.84370368719101),
new google.maps.LatLng(10.493938499504377, -66.84363931417465),
new google.maps.LatLng(10.494091465585207, -66.84324502944946),
new google.maps.LatLng(10.494323551908197, -66.84331208467484),
new google.maps.LatLng(10.49408237128998, -66.84370202237164)

    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493772346606722, -66.84354811906815),
new google.maps.LatLng(10.493906220287402, -66.84320909694321),
new google.maps.LatLng(10.49373278637985, -66.84316188097),
new google.maps.LatLng(10.49360883096954, -66.84346497058868),
new google.maps.LatLng(10.493772346606722, -66.84354543685913)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493730149031213, -66.84316456317902),
new google.maps.LatLng(10.493600918920396, -66.84311628341675),
new google.maps.LatLng(10.493490150210988, -66.84341132640839),
new google.maps.LatLng(10.493600918920396, -66.84346497058868)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493487512860288, -66.84340864419937),
new google.maps.LatLng(10.49360568502269, -66.84311806400979),
new google.maps.LatLng(10.493479600808026, -66.8430706858635),
new google.maps.LatLng(10.493368832055184, -66.84336572885513),
new google.maps.LatLng(10.493482238158801, -66.84340864419937)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493366194703455, -66.84336841106415),
new google.maps.LatLng(10.493231689734818, -66.84335500001907),
new google.maps.LatLng(10.49331081031169, -66.842982172966),
new google.maps.LatLng(10.493478993593397, -66.84307230323708)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493310053186438, -66.8429857406449),
new google.maps.LatLng(10.493229052381906, -66.84335231781006),
new google.maps.LatLng(10.493060261748859, -66.84333086013794),
new google.maps.LatLng(10.493113008831562, -66.84296607971191),
new google.maps.LatLng(10.493310462229317, -66.84298641963835)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493112791099135, -66.84296758547362),
new google.maps.LatLng(10.493060803288584, -66.84332711503828),
new google.maps.LatLng(10.49294158077984, -66.84334963560104),
new google.maps.LatLng(10.492949492845856, -66.84297949075699),
new google.maps.LatLng(10.493107734123702, -66.84297144412994)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.49293894342446, -66.84335231781006),
new google.maps.LatLng(10.492949407508661, -66.84298348302934),
new google.maps.LatLng(10.492764877919397, -66.84297412633896),
new google.maps.LatLng(10.492862460108533, -66.84337913990021),
new google.maps.LatLng(10.492939135483718, -66.84334557907653)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492864050355887, -66.84337841490708),
new google.maps.LatLng(10.492765717683502, -66.84297761176799),
new google.maps.LatLng(10.492654108910633, -66.84304118156433),
new google.maps.LatLng(10.492733229635222, -66.84342205524445),
new google.maps.LatLng(10.492865097464575, -66.84337913990021)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492651471552811, -66.84303849935532),
new google.maps.LatLng(10.492511691555386, -66.84300631284714),
new google.maps.LatLng(10.49235344997265, -66.84332817792892),
new google.maps.LatLng(10.492461581729618, -66.84338986873627),
new google.maps.LatLng(10.492648834194949, -66.84304654598236)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492509317932248, -66.84301114082336),
new google.maps.LatLng(10.492348175251838, -66.84333086013794),
new google.maps.LatLng(10.492240043455244, -66.84326112270355),
new google.maps.LatLng(10.492102900634464, -66.84323698282242),
new google.maps.LatLng(10.492332351088843, -66.84306532144547),
new google.maps.LatLng(10.492509054196326, -66.84301167726517)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R4Coord = [
new google.maps.LatLng(10.495085743266662, -66.84504747390747),
new google.maps.LatLng(10.494895854937818, -66.84483826160431),
new google.maps.LatLng(10.49504882054519, -66.84452176094055),
new google.maps.LatLng(10.495127940657241, -66.84461295604706),
new google.maps.LatLng(10.495164863369272, -66.84484899044037),
new google.maps.LatLng(10.4950856337923, -66.84504735244894)
    ];
    var R4= new google.maps.Polygon({
      paths: R4Coord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R4'
    });
    polyArray.push(R4);

var R4Coord = [
new google.maps.LatLng(10.49486420687168, -66.84538006782532),
new google.maps.LatLng(10.495085743266662, -66.84505820274353),
new google.maps.LatLng(10.494953876383994, -66.84491872787476),
new google.maps.LatLng(10.494737614574712, -66.84529423713684),
new google.maps.LatLng(10.49486420687168, -66.84538006782532)
    ];
    var R4= new google.maps.Polygon({
      paths: R4Coord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R4'
    });
    polyArray.push(R4);

var R3ECoord = [
new google.maps.LatLng(10.49473809106725, -66.84529340977258),
new google.maps.LatLng(10.494953876383994, -66.84491872787476),
new google.maps.LatLng(10.494800910729678, -66.84476315975189),
new google.maps.LatLng(10.494584648813428, -66.84520304203033),
new google.maps.LatLng(10.494739438390935, -66.84529107032876)

    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.494800910729678, -66.84476315975189),
new google.maps.LatLng(10.494885305582795, -66.84484899044037),
new google.maps.LatLng(10.495045175137113, -66.84452930364495),
new google.maps.LatLng(10.494927503000728, -66.84439837932587),
new google.maps.LatLng(10.49479036137141, -66.84474170207977),
new google.maps.LatLng(10.494877393566293, -66.84484094381332)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.494790506879802, -66.8447418685617),
new google.maps.LatLng(10.494927503000728, -66.84439837932587),
new google.maps.LatLng(10.494832558802294, -66.84427499771118),
new google.maps.LatLng(10.494690142449999, -66.8446558713913),
new google.maps.LatLng(10.494795454165104, -66.84474752894766)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.494690142449999, -66.8446558713913),
new google.maps.LatLng(10.494831349374277, -66.84427823216703),
new google.maps.LatLng(10.494774537333358, -66.8442052602768),
new google.maps.LatLng(10.494579374130655, -66.84457004070282),
new google.maps.LatLng(10.494691369523125, -66.84465263596775)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.494581083803842, -66.84456684514595),
new google.maps.LatLng(10.494772827661238, -66.84420845583367),
new google.maps.LatLng(10.49459519817872, -66.8440979719162),
new google.maps.LatLng(10.494400034862865, -66.84443056583405),
new google.maps.LatLng(10.494579868430632, -66.84456377956025)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.494400034862865, -66.84443056583405),
new google.maps.LatLng(10.494591033655986, -66.84410509504119),
new google.maps.LatLng(10.494510803246431, -66.84403091669083),
new google.maps.LatLng(10.494310365189968, -66.84432595968246),
new google.maps.LatLng(10.494400962485022, -66.84442898707846)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.494312779373804, -66.84432870378862),
new google.maps.LatLng(10.494513440588417, -66.84402823448181),
new google.maps.LatLng(10.494368386745986, -66.84393167495728),
new google.maps.LatLng(10.49419168470059, -66.84422135353088),
new google.maps.LatLng(10.494312653318282, -66.84432262423991)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.494194322045297, -66.84422940015793),
new google.maps.LatLng(10.494362419375287, -66.84394145763923),
new google.maps.LatLng(10.494189047355873, -66.84383511543274),
new google.maps.LatLng(10.494020257246635, -66.84415698051453),
new google.maps.LatLng(10.49419168470059, -66.84422135353088)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493904213993114, -66.84405505657196),
new google.maps.LatLng(10.494053926764657, -66.84375747371502),
new google.maps.LatLng(10.493883115215079, -66.84367954730988),
new google.maps.LatLng(10.493743335774186, -66.84396117925644),
new google.maps.LatLng(10.49390157664595, -66.84406042098999)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493740698425638, -66.84396117925644),
new google.maps.LatLng(10.493884705780221, -66.84368026625248),
new google.maps.LatLng(10.493719599636432, -66.84360444545746),
new google.maps.LatLng(10.493619380368088, -66.84388071298599),
new google.maps.LatLng(10.493744133994394, -66.84395957097797)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493619966567342, -66.84387909705129),
new google.maps.LatLng(10.493719599636432, -66.84360444545746),
new google.maps.LatLng(10.493593006871034, -66.8435400724411),
new google.maps.LatLng(10.493482238158801, -66.84378951787949),
new google.maps.LatLng(10.493629929766291, -66.84388071298599)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);


var R3ECoord = [
new google.maps.LatLng(10.493489980614346, -66.84379429861082),
new google.maps.LatLng(10.49359775410067, -66.84354248642921),
new google.maps.LatLng(10.493453227299039, -66.84347301721573),
new google.maps.LatLng(10.493360919999894, -66.84373587369919),
new google.maps.LatLng(10.493482509416134, -66.84378890702203)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);


var R3ECoord = [
new google.maps.LatLng(10.493368832055184, -66.84373319149017),
new google.maps.LatLng(10.493452131784013, -66.8434761739694),
new google.maps.LatLng(10.493339821184799, -66.8434327840805),
new google.maps.LatLng(10.493281799435847, -66.84370905160904),
new google.maps.LatLng(10.493360919999894, -66.84373587369919),
new google.maps.LatLng(10.493282132675333, -66.84370749263559),
new google.maps.LatLng(10.4933371838328, -66.8434327840805),
new google.maps.LatLng(10.493213228263972, -66.8434140086174),
new google.maps.LatLng(10.493157843844816, -66.84365272521973),
new google.maps.LatLng(10.49328268014018, -66.84370493146486)

    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.49315520649127, -66.84365272521973),
new google.maps.LatLng(10.493070811166106, -66.8435937166214),
new google.maps.LatLng(10.493094547353644, -66.84340864419937),
new google.maps.LatLng(10.493210590910907, -66.84341669082642),
new google.maps.LatLng(10.49315520649127, -66.84365272521973)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493068173811833, -66.8435937166214),
new google.maps.LatLng(10.493094547353644, -66.84340864419937),
new google.maps.LatLng(10.493020701430895, -66.84339255094528),
new google.maps.LatLng(10.492651471552811, -66.84352666139603),
new google.maps.LatLng(10.492880921600323, -66.84376806020737),
new google.maps.LatLng(10.493068173811833, -66.8435937166214)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492878351655296, -66.84376535642974),
new google.maps.LatLng(10.49298641581793, -66.84388339519501),
new google.maps.LatLng(10.49315520649127, -66.84365272521973)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493277941681571, -66.84370209916125),
new google.maps.LatLng(10.493083997937196, -66.84397727251053),
new google.maps.LatLng(10.492991690527864, -66.84388607740402),
new google.maps.LatLng(10.49315520649127, -66.84366077184677)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493281799435847, -66.84370905160904),
new google.maps.LatLng(10.493374106758603, -66.84374660253525),
new google.maps.LatLng(10.493168393258745, -66.8440443277359),
new google.maps.LatLng(10.493094547353644, -66.84397727251053),
new google.maps.LatLng(10.493279162083367, -66.843701004982)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493379381461935, -66.84374928474426),
new google.maps.LatLng(10.493482238158801, -66.84378951787949),
new google.maps.LatLng(10.493252788557294, -66.84413284063339),
new google.maps.LatLng(10.49316831464354, -66.84404425634989),
new google.maps.LatLng(10.493377748316508, -66.84374331480365)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493622187314259, -66.8438759322546),
new google.maps.LatLng(10.493483945484396, -66.84378567307078),
new google.maps.LatLng(10.493255425910002, -66.84413820505142),
new google.maps.LatLng(10.493368832055184, -66.84424817562103),
new google.maps.LatLng(10.493627292416775, -66.84387266635895)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493737971147807, -66.84395513065527),
new google.maps.LatLng(10.49362202656784, -66.84388031695511),
new google.maps.LatLng(10.493371124250142, -66.84424484536152),
new google.maps.LatLng(10.493484875509552, -66.84436351060867),
new google.maps.LatLng(10.493743335774186, -66.84395849704742)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.49390157664595, -66.84405773878098),
new google.maps.LatLng(10.493741555914005, -66.84396127847441),
new google.maps.LatLng(10.493482283798551, -66.84436081351816),
new google.maps.LatLng(10.493593006871034, -66.84448152780533),
new google.maps.LatLng(10.494014982554232, -66.84415966272354)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493591735179779, -66.84448014210352),
new google.maps.LatLng(10.494021096817056, -66.84415537954203),
new google.maps.LatLng(10.494199596734635, -66.84421867132187),
new google.maps.LatLng(10.493983334397967, -66.84456467628479),
new google.maps.LatLng(10.493640479164137, -66.84462636709213),
new google.maps.LatLng(10.493590507339965, -66.84447880418452)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493645753862914, -66.84463173151016),
new google.maps.LatLng(10.493985504889535, -66.8445612036478),
new google.maps.LatLng(10.493983334397967, -66.844781935215),
new google.maps.LatLng(10.493666852657146, -66.84479534626007),
new google.maps.LatLng(10.493643116513526, -66.84463441371918)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.49400707051548, -66.84505552053452),
new google.maps.LatLng(10.49398239197043, -66.84456268099422),
new google.maps.LatLng(10.49419710716271, -66.84422466457943),
new google.maps.LatLng(10.494582011472067, -66.8445673584938),
new google.maps.LatLng(10.494397397519913, -66.84512257575989),
new google.maps.LatLng(10.494249706278874, -66.84506088495255),
new google.maps.LatLng(10.494012345208011, -66.84505015611649)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);


var R3ECoord = [
new google.maps.LatLng(10.494395805759302, -66.84512191087941),
new google.maps.LatLng(10.49457960418791, -66.84457459676247),
new google.maps.LatLng(10.494685691393542, -66.84464984798649),
new google.maps.LatLng(10.494502891220337, -66.84516549110413),
new google.maps.LatLng(10.494400034862865, -66.84512794017792)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.494502142411815, -66.84516521772815),
new google.maps.LatLng(10.494690414201237, -66.84465514974681),
new google.maps.LatLng(10.49480618540866, -66.84475511312485),
new google.maps.LatLng(10.494589923496124, -66.84520304203033),
new google.maps.LatLng(10.494502891220337, -66.84516549110413)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.494819372105757, -66.8454310297966),
new google.maps.LatLng(10.494584648813428, -66.84528350830078),
new google.maps.LatLng(10.494392122833947, -66.8456107378006),
new google.maps.LatLng(10.494254980967272, -66.84553563594818),
new google.maps.LatLng(10.494376298775515, -66.84520304203033),
new google.maps.LatLng(10.494167948597251, -66.84511989355087),
new google.maps.LatLng(10.49404926805322, -66.84578776359558),
new google.maps.LatLng(10.494450144374635, -66.84599429368973),
new google.maps.LatLng(10.494822009445121, -66.84543639421463)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.494447507032104, -66.84599697589874),
new google.maps.LatLng(10.49404926805322, -66.84579581022263),
new google.maps.LatLng(10.494030806631162, -66.84620350599289),
new google.maps.LatLng(10.494228607524388, -66.84617668390274),
new google.maps.LatLng(10.49437366143236, -66.84609353542328),
new google.maps.LatLng(10.494442232347003, -66.84599965810776)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.494030864440225, -66.84620222935729),
new google.maps.LatLng(10.494036081323285, -66.84599161148071),
new google.maps.LatLng(10.493896301951526, -66.84597283601761),
new google.maps.LatLng(10.493872565825514, -66.8462061882019),
new google.maps.LatLng(10.494020257246635, -66.8462061882019)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.49386992847807, -66.84621155261993),
new google.maps.LatLng(10.4938825163821, -66.8461083633058),
new google.maps.LatLng(10.4935903695212, -66.84606671333313),
new google.maps.LatLng(10.493579820121647, -66.846222281456),
new google.maps.LatLng(10.493870417706908, -66.84620777123473)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493873886176786, -66.84610827573675),
new google.maps.LatLng(10.493587732171353, -66.84606671333313),
new google.maps.LatLng(10.49359564422083, -66.84591919183731),
new google.maps.LatLng(10.493900018968521, -66.84597333529513),
new google.maps.LatLng(10.49387520317293, -66.84610694646835)

    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.494036047115937, -66.8459929856565),
new google.maps.LatLng(10.493595568594783, -66.84592060189777),
new google.maps.LatLng(10.493606193619835, -66.84568852186203),
new google.maps.LatLng(10.494059817436753, -66.84572070837021),
new google.maps.LatLng(10.494036081323285, -66.84599429368973)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.494062109436884, -66.84571686740378),
new google.maps.LatLng(10.494091465585207, -66.84553295373917),
new google.maps.LatLng(10.49362201771768, -66.84553027153015),
new google.maps.LatLng(10.493610224551341, -66.84568882182504),
new google.maps.LatLng(10.49406245478258, -66.8457180261612)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.494160036562391, -66.84511989355087),
new google.maps.LatLng(10.494090132887225, -66.84553293916531),
new google.maps.LatLng(10.493913422755574, -66.84553100673452),
new google.maps.LatLng(10.493930587463655, -66.84513062238693),
new google.maps.LatLng(10.494159851586828, -66.84512096654419)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493930522744925, -66.84513202340418),
new google.maps.LatLng(10.493912314382584, -66.84552619421083),
new google.maps.LatLng(10.493623325026235, -66.84553028289378),
new google.maps.LatLng(10.493637841814698, -66.84518694877625),
new google.maps.LatLng(10.493935862157484, -66.84513598680496)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);


var C1Coord = [
new google.maps.LatLng(10.494579374130655, -66.8452861905098),
new google.maps.LatLng(10.494381573461748, -66.8456107378006),
new google.maps.LatLng(10.494258598242057, -66.84553761684566),
new google.maps.LatLng(10.494374849231892, -66.84520701596864),
new google.maps.LatLng(10.494579374130655, -66.8452861905098)
    ];
    var C1= new google.maps.Polygon({
      paths: C1Coord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'C1'
    });
    polyArray.push(C1);

var R3ECoord = [
new google.maps.LatLng(10.493930522744925, -66.84513202340418),
new google.maps.LatLng(10.493912314382584, -66.84552619421083),
new google.maps.LatLng(10.493623325026235, -66.84553028289378),
new google.maps.LatLng(10.493637841814698, -66.84518694877625),
new google.maps.LatLng(10.493935862157484, -66.84513598680496)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var C2Coord = [
new google.maps.LatLng(10.495871668721245, -66.8463134765625),
new google.maps.LatLng(10.494880030905149, -66.84547662734985),
new google.maps.LatLng(10.494579374130655, -66.84593260288239),
new google.maps.LatLng(10.494938052354302, -66.84627056121826),
new google.maps.LatLng(10.494869481549593, -66.84641003608704),
new google.maps.LatLng(10.495797823461528, -66.84659779071808),
new google.maps.LatLng(10.495866394060418, -66.84631884098053)
    ];
    var C2= new google.maps.Polygon({
      paths: C2Coord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'C2'
    });
    polyArray.push(C2);



var AEC31Coord = [
new google.maps.LatLng(10.494869481549593, -66.84641003608704),
new google.maps.LatLng(10.494927503000728, -66.84627592563629),
new google.maps.LatLng(10.494584648813428, -66.84594869613647),
new google.maps.LatLng(10.494320914564597, -66.84622764587402),
new google.maps.LatLng(10.494858932193663, -66.84641540050507)

    ];
    var AEC31E= new google.maps.Polygon({
      paths: AEC31Coord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'AEC31E'
    });
    polyArray.push(AEC31E);

var R3ECoord = [
new google.maps.LatLng(10.493962235625327, -66.84628665447235),
new google.maps.LatLng(10.49432603315997, -66.84622223197636),
new google.maps.LatLng(10.494849419794273, -66.84641204139496),
new google.maps.LatLng(10.495785642974074, -66.8465953272439),
new google.maps.LatLng(10.495375850210626, -66.84841632843018),
new google.maps.LatLng(10.493424216436566, -66.84834122657776),
new google.maps.LatLng(10.493540259870146, -66.84671580791473),
new google.maps.LatLng(10.49395696093193, -66.84674799442291),
new google.maps.LatLng(10.493965240748766, -66.84628612295205)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493941136851234, -66.84674263000488),
new google.maps.LatLng(10.493539713670565, -66.8467236244515),
new google.maps.LatLng(10.493566633371717, -66.84629201889038),
new google.maps.LatLng(10.493962235625327, -66.84628129005432)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493382018813564, -66.8444037437439),
new google.maps.LatLng(10.493566633371717, -66.84472024440765),
new google.maps.LatLng(10.493234327087707, -66.84463441371918),
new google.maps.LatLng(10.49338849170155, -66.84441484077098)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493574545421739, -66.8447282910347),
new google.maps.LatLng(10.493577182771713, -66.84486240148544),
new google.maps.LatLng(10.49317103061218, -66.84483021497726),
new google.maps.LatLng(10.493239601793416, -66.8446397781372),
new google.maps.LatLng(10.493571908071765, -66.84473365545273)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493582457471572, -66.84486776590347),
new google.maps.LatLng(10.493175053345771, -66.8448304706742),
new google.maps.LatLng(10.493157843844816, -66.84496968984604),
new google.maps.LatLng(10.493582457471572, -66.8450179696083),
new google.maps.LatLng(10.493578414976202, -66.84486739215305)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493582457471572, -66.84502333402634),
new google.maps.LatLng(10.493164501972277, -66.84497042188576),
new google.maps.LatLng(10.493144657076884, -66.84509038925171),
new google.maps.LatLng(10.493571908071765, -66.84512794017792),
new google.maps.LatLng(10.493579820121647, -66.84502869844437)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493569270721741, -66.84513330459595),
new google.maps.LatLng(10.493148702006877, -66.84509078103508),
new google.maps.LatLng(10.493200041498406, -66.84527277946472),
new google.maps.LatLng(10.493563996021665, -66.84529691934586),
new google.maps.LatLng(10.493566633371717, -66.84513866901398)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493560142387773, -66.84529666374709),
new google.maps.LatLng(10.493206682616156, -66.84527310108706),
new google.maps.LatLng(10.49320267885156, -66.84541761875153),
new google.maps.LatLng(10.49355344662121, -66.84545248746872),
new google.maps.LatLng(10.493569270721741, -66.84529960155487)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493552012752213, -66.84545234493226),
new google.maps.LatLng(10.49320272943094, -66.84541622988166),
new google.maps.LatLng(10.493213228263972, -66.8455919623375),
new google.maps.LatLng(10.493542897220411, -66.84561342000961),
new google.maps.LatLng(10.493550809271046, -66.84545248746872)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493541499873622, -66.84561332905832),
new google.maps.LatLng(10.493219710699183, -66.84559238426954),
new google.maps.LatLng(10.49322641502897, -66.84578239917755),
new google.maps.LatLng(10.493534985169573, -66.84577971696854),
new google.maps.LatLng(10.493540259870146, -66.84561342000961)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493525766387501, -66.84577979710173),
new google.maps.LatLng(10.49322641502897, -66.84578776359558),
new google.maps.LatLng(10.493231689734818, -66.84593260288239),
new google.maps.LatLng(10.493524435768139, -66.84596747159958),
new google.maps.LatLng(10.493529710468902, -66.84578508138657)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);


var R3ECoord = [
new google.maps.LatLng(10.493231689734818, -66.84593796730042),
new google.maps.LatLng(10.493520685620554, -66.84596702492263),
new google.maps.LatLng(10.493503336964189, -66.84608817100525),
new google.maps.LatLng(10.493229052381906, -66.84609353542328),
new google.maps.LatLng(10.493235476033494, -66.84593835237001)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493505974314761, -66.84609353542328),
new google.maps.LatLng(10.493229099365632, -66.84609214972147),
new google.maps.LatLng(10.493239601793416, -66.84620082378387),
new google.maps.LatLng(10.493519161067288, -66.846222281456),
new google.maps.LatLng(10.493505974314761, -66.84609353542328)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493234327087707, -66.84620350599289),
new google.maps.LatLng(10.493229167387279, -66.84609205206846),
new google.maps.LatLng(10.492865097464575, -66.84602111577988),
new google.maps.LatLng(10.49284663597186, -66.84619009494781),
new google.maps.LatLng(10.493234327087707, -66.84620350599289)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);


var R3ECoord = [
new google.maps.LatLng(10.492866610868267, -66.84602140576311),
new google.maps.LatLng(10.493223777676006, -66.84609889984131),
new google.maps.LatLng(10.49322641502897, -66.84578776359558),
new google.maps.LatLng(10.492888833667887, -66.84575289487839),
new google.maps.LatLng(10.492868724555306, -66.84602133200536)

    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493218502970041, -66.8455919623375),
new google.maps.LatLng(10.493226357059442, -66.84578100389774),
new google.maps.LatLng(10.492888833667887, -66.84575289487839),
new google.maps.LatLng(10.492865097464575, -66.84556245803833),
new google.maps.LatLng(10.493218546821518, -66.8455932556592)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);


var R3ECoord = [
new google.maps.LatLng(10.493205316204701, -66.8452700972557),
new google.maps.LatLng(10.493212994207934, -66.84558803472953),
new google.maps.LatLng(10.492862460108533, -66.84556245803833),
new google.maps.LatLng(10.492822899765304, -66.84524595737457),
new google.maps.LatLng(10.49320535026507, -66.84527147129631)

    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);


var R3ECoord = [
new google.maps.LatLng(10.493165033757776, -66.8449738210129),
new google.maps.LatLng(10.493142019723246, -66.84509307146072),
new google.maps.LatLng(10.493198663520394, -66.84527231285557),
new google.maps.LatLng(10.49282674656024, -66.8452462271826),
new google.maps.LatLng(10.492788614130404, -66.84493482112885),
new google.maps.LatLng(10.493161613260904, -66.84497010428123)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493091909999562, -66.84480607509613),
new google.maps.LatLng(10.493080117146151, -66.84496215437713),
new google.maps.LatLng(10.492788774944822, -66.8449362930728),
new google.maps.LatLng(10.492791251487057, -66.84477657079697),
new google.maps.LatLng(10.493094547353644, -66.84480339288712)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493088117256752, -66.84480282423868),
new google.maps.LatLng(10.492796526200339, -66.84477388858795),
new google.maps.LatLng(10.492841361259432, -66.84458613395691),
new google.maps.LatLng(10.493128832954637, -66.84464514255524),
new google.maps.LatLng(10.493088096201543, -66.84480327431976)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492842372583711, -66.84458634154885),
new google.maps.LatLng(10.49312477603689, -66.84464430980148),
new google.maps.LatLng(10.493205316204701, -66.84449225664139),
new google.maps.LatLng(10.492989053172915, -66.84431254863739),
new google.maps.LatLng(10.492841361259432, -66.84458613395691)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);


var R3ECoord = [
new google.maps.LatLng(10.493197404145224, -66.8444949388504),
new google.maps.LatLng(10.493318722368265, -66.84433668851852),
new google.maps.LatLng(10.493126195600846, -66.8441516160965),
new google.maps.LatLng(10.492989053172915, -66.84431254863739)
    ];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);


var R3ECoord = [
new google.maps.LatLng(10.493505974314761, -66.84628665447235),
new google.maps.LatLng(10.493490150210988, -66.84649586677551),
new google.maps.LatLng(10.493165755905299, -66.84647709131241),
new google.maps.LatLng(10.493160481198329, -66.84627324342728),
new google.maps.LatLng(10.493500699613593, -66.84629201889038)];

    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493157843844816, -66.84627056121826),
new google.maps.LatLng(10.493169775595723, -66.84647733178633),
new google.maps.LatLng(10.492843998615653, -66.84645563364029),
new google.maps.LatLng(10.49284663597186, -66.84626251459122),
new google.maps.LatLng(10.493152569137708, -66.84627324342728)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493486131348105, -66.8464956303248),
new google.maps.LatLng(10.493474326106412, -66.84669703245163),
new google.maps.LatLng(10.493168393258745, -66.84666484594345),
new google.maps.LatLng(10.493165755905299, -66.84648245573044),
new google.maps.LatLng(10.4934808742409, -66.84649532102173)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493471688755573, -66.84670239686966),
new google.maps.LatLng(10.493169820023732, -66.84666497785537),
new google.maps.LatLng(10.493165755905299, -66.84683382511139),
new google.maps.LatLng(10.493469051404707, -66.84686869382858),
new google.maps.LatLng(10.493470549208885, -66.84670225454505)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493460090975416, -66.84686764544932),
new google.maps.LatLng(10.49317103061218, -66.84683918952942),
new google.maps.LatLng(10.493168393258745, -66.84698402881622),
new google.maps.LatLng(10.49345850200102, -66.84703230857849),
new google.maps.LatLng(10.493464997328749, -66.8468682194976)];

    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493453227299039, -66.84703767299652),
new google.maps.LatLng(10.49316987765785, -66.84698425755039),
new google.maps.LatLng(10.49317103061218, -66.8471610546112),
new google.maps.LatLng(10.493440040543712, -66.8472146987915),
new google.maps.LatLng(10.493452295636713, -66.84703126624197)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);




var R3ECoord = [
new google.maps.LatLng(10.49343852169897, -66.8472143959134),
new google.maps.LatLng(10.49317103061218, -66.8471597135067),
new google.maps.LatLng(10.49315520649127, -66.84743732213974),
new google.maps.LatLng(10.493429491139034, -66.84745341539383),
new google.maps.LatLng(10.493433348283748, -66.84721384135162)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492844017445986, -66.84645431224965),
new google.maps.LatLng(10.493165755905299, -66.84648245573044),
new google.maps.LatLng(10.493168335379535, -66.8466608432177),
new google.maps.LatLng(10.492820262408907, -66.8466380238533),
new google.maps.LatLng(10.492841361259432, -66.8464583158493)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492833449190655, -66.84664338827133),
new google.maps.LatLng(10.493168373875099, -66.84666084294065),
new google.maps.LatLng(10.493167209600132, -66.84683399904304),
new google.maps.LatLng(10.492825537121677, -66.84682309627533),
new google.maps.LatLng(10.492833449190655, -66.84664338827133)];

    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492825593410293, -66.8468218177835),
new google.maps.LatLng(10.493167035293013, -66.84683378261718),
new google.maps.LatLng(10.49317103061218, -66.84698536992073),
new google.maps.LatLng(10.492809712983096, -66.84697598218918),
new google.maps.LatLng(10.492825537121677, -66.84682309627533)];


    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);


var R3ECoord = [
new google.maps.LatLng(10.492814987696043, -66.84698134660721),
new google.maps.LatLng(10.493170981896744, -66.84698264158453),
new google.maps.LatLng(10.493175081272389, -66.84715927355444),
new google.maps.LatLng(10.492804438270056, -66.84715837240219),
new google.maps.LatLng(10.492809864721416, -66.84697451615989)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);


var R3ECoord = [
new google.maps.LatLng(10.492804438270056, -66.84716373682022),
new google.maps.LatLng(10.493170647112015, -66.84716513279483),
new google.maps.LatLng(10.493147294430523, -66.84743463993073),
new google.maps.LatLng(10.49279388884371, -66.84742122888565),
new google.maps.LatLng(10.492801800913504, -66.8471610546112)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493424216436566, -66.84752583503723),
new google.maps.LatLng(10.493382018813564, -66.84797376394272),
new google.maps.LatLng(10.493236964440568, -66.84796571731567),
new google.maps.LatLng(10.493265975320611, -66.84751778841019),
new google.maps.LatLng(10.493424216436566, -66.8475204706192)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.49337674411027, -66.84798181056976),
new google.maps.LatLng(10.493234327087707, -66.8479710817337),
new google.maps.LatLng(10.493207953557818, -66.84834659099579),
new google.maps.LatLng(10.493347733240636, -66.8483492732048),
new google.maps.LatLng(10.493384656165166, -66.84798449277878)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493208241390764, -66.84834249279828),
new google.maps.LatLng(10.493260700615345, -66.84751778841019),
new google.maps.LatLng(10.493033888204122, -66.84749633073807),
new google.maps.LatLng(10.493002239947465, -66.84833586215973),
new google.maps.LatLng(10.49320267885156, -66.84834390878677)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.49299696523771, -66.84833317995071),
new google.maps.LatLng(10.493033888204122, -66.84749633073807),
new google.maps.LatLng(10.492788614130404, -66.84748560190201),
new google.maps.LatLng(10.492785976773714, -66.84831708669662),
new google.maps.LatLng(10.492997023807535, -66.84833190424717)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492785992555474, -66.848313058104),
new google.maps.LatLng(10.492788614130404, -66.847482919693),
new google.maps.LatLng(10.492564438731636, -66.84747219085693),
new google.maps.LatLng(10.492535427785809, -66.84830367565155),
new google.maps.LatLng(10.492785982006401, -66.84831575095637)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.4925643962766, -66.84747357252166),
new google.maps.LatLng(10.492535474203015, -66.84830238533891),
new google.maps.LatLng(10.492342900530925, -66.84830367565155),
new google.maps.LatLng(10.492366636774298, -66.84746950864792),
new google.maps.LatLng(10.492561801373038, -66.84747219085693)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.4923349884494, -66.8482956290245),
new google.maps.LatLng(10.49237057427564, -66.84746956276223),
new google.maps.LatLng(10.492160922604514, -66.84745609760284),
new google.maps.LatLng(10.4921160874468, -66.84828758239746),
new google.maps.LatLng(10.4923349884494, -66.84830099344254)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.49215564788042, -66.84745609760284),
new google.maps.LatLng(10.492116297247875, -66.84828364328456),
new google.maps.LatLng(10.491947296206492, -66.84827417135239),
new google.maps.LatLng(10.49195520829794, -66.84745073318481),
new google.maps.LatLng(10.492153010518335, -66.84745609760284)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.49195257093415, -66.84744536876678),
new google.maps.LatLng(10.491942021478748, -66.84827953577042),
new google.maps.LatLng(10.491702021271317, -66.84826612472534),
new google.maps.LatLng(10.491715208100725, -66.84743463993073),
new google.maps.LatLng(10.491947296206492, -66.8474480509758)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.491696746539386, -66.84826612472534),
new google.maps.LatLng(10.491715183696826, -66.84743600496768),
new google.maps.LatLng(10.491353888771378, -66.84741586446762),
new google.maps.LatLng(10.491322240342871, -66.84825003147125),
new google.maps.LatLng(10.491696746539386, -66.84826612472534)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.491345976664551, -66.84741586446762),
new google.maps.LatLng(10.491319602973688, -66.84825003147125),
new google.maps.LatLng(10.49097147004347, -66.84823393821716),
new google.maps.LatLng(10.490976744787755, -66.84738636016846),
new google.maps.LatLng(10.491351251402461, -66.84741050004959)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.49097147004347, -66.84824198484421),
new google.maps.LatLng(10.49097410741562, -66.84738636016846),
new google.maps.LatLng(10.490660259971234, -66.84736490249634),
new google.maps.LatLng(10.490612787220831, -66.84822052717209),
new google.maps.LatLng(10.490966195299084, -66.84823930263519)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.49065762259639, -66.84736758470535),
new google.maps.LatLng(10.490610149845603, -66.8482232093811),
new google.maps.LatLng(10.490264653495363, -66.84809446334839),
new google.maps.LatLng(10.490449269913706, -66.84736222028732),
new google.maps.LatLng(10.490660259971234, -66.84736222028732)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.490446632537079, -66.8473568558693),
new google.maps.LatLng(10.490262016117146, -66.8480971455574),
new google.maps.LatLng(10.490061575307951, -66.84800058603287),
new google.maps.LatLng(10.490251466604123, -66.84732735157013),
new google.maps.LatLng(10.490443995160426, -66.8473568558693)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.49024619184746, -66.84733003377914),
new google.maps.LatLng(10.490056300548055, -66.84800326824188),
new google.maps.LatLng(10.489840035315149, -66.84785574674606),
new google.maps.LatLng(10.490022014606591, -66.84733808040619),
new google.maps.LatLng(10.490235642333879, -66.84733539819717)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);


var R3ECoord = [
new google.maps.LatLng(10.490019377226313, -66.84732735157013),
new google.maps.LatLng(10.48983212316962, -66.84784770011902),
new google.maps.LatLng(10.48967915498287, -66.84729784727097),
new google.maps.LatLng(10.490016739846022, -66.8473219871521)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492714768134633, -66.84741050004959),
new google.maps.LatLng(10.492735866992358, -66.84710204601288),
new google.maps.LatLng(10.492516966273422, -66.8470698595047),
new google.maps.LatLng(10.492522240991361, -66.84740245342255),
new google.maps.LatLng(10.492712130777317, -66.8474131822586)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492511691555386, -66.84707522392273),
new google.maps.LatLng(10.4923798235754, -66.84706181287766),
new google.maps.LatLng(10.492361362053716, -66.84738904237747),
new google.maps.LatLng(10.492516966273422, -66.84740513563156),
new google.maps.LatLng(10.492522240991361, -66.84707522392273)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492350812612257, -66.84739172458649),
new google.maps.LatLng(10.492377186215222, -66.84706449508667),
new google.maps.LatLng(10.492058065468326, -66.8470162153244),
new google.maps.LatLng(10.492055428105413, -66.84738099575043),
new google.maps.LatLng(10.492350812612257, -66.84739172458649)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492735866992358, -66.84710204601288),
new google.maps.LatLng(10.492377186215222, -66.84706449508667),
new google.maps.LatLng(10.492406197175887, -66.84668898582458),
new google.maps.LatLng(10.492746416420687, -66.84671312570572),
new google.maps.LatLng(10.492735866992358, -66.84709936380386)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492746416420687, -66.84671312570572),
new google.maps.LatLng(10.492407409000947, -66.8466890791907),
new google.maps.LatLng(10.492427296054668, -66.8464931845665),
new google.maps.LatLng(10.492767515276265, -66.84652268886566),
new google.maps.LatLng(10.492749053777711, -66.8467104434967)];

    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492764877919397, -66.84652805328369),
new google.maps.LatLng(10.492433727975047, -66.84649374847146),
new google.maps.LatLng(10.492432570774133, -66.84636443853378),
new google.maps.LatLng(10.49277015263311, -66.84638053178787),
new google.maps.LatLng(10.492767515276265, -66.84652268886566)];

    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);


var R3ECoord = [
new google.maps.LatLng(10.49277012823052, -66.84638184712026),
new google.maps.LatLng(10.492429933414412, -66.84636175632477),
new google.maps.LatLng(10.49244048285316, -66.84623301029205),
new google.maps.LatLng(10.492778064703513, -66.84625715017319),
new google.maps.LatLng(10.49277015263311, -66.84638053178787)];

    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492441695105027, -66.84623310333859),
new google.maps.LatLng(10.492430059056858, -66.84636030816216),
new google.maps.LatLng(10.49211345008437, -66.84635102748871),
new google.maps.LatLng(10.49211345008437, -66.84622496366501),
new google.maps.LatLng(10.492444317527386, -66.84623330462296)];

    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.49211345008437, -66.84634700417519),
new google.maps.LatLng(10.492424658694897, -66.8463671207428),
new google.maps.LatLng(10.492432570774133, -66.8464931845665),
new google.maps.LatLng(10.492097625909377, -66.8464931845665),
new google.maps.LatLng(10.49211345008437, -66.84634566307068)];

    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492100263271933, -66.84650123119354),
new google.maps.LatLng(10.492428614734546, -66.8464931845665),
new google.maps.LatLng(10.492414109255602, -66.84669435024261),
new google.maps.LatLng(10.492094988546796, -66.84666216373444),
new google.maps.LatLng(10.492094988546796, -66.84650391340256)];

    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492092351184187, -66.84666752815247),
new google.maps.LatLng(10.492405097904282, -66.84669344135744),
new google.maps.LatLng(10.492385098295664, -66.84686601161957),
new google.maps.LatLng(10.492081801733557, -66.84683918952942),
new google.maps.LatLng(10.492094988546796, -66.84666082262993)];

    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492081801733557, -66.84683918952942),
new google.maps.LatLng(10.492392506201297, -66.84687277989633),
new google.maps.LatLng(10.49237747388254, -66.84706059429789),
new google.maps.LatLng(10.49206597755695, -66.84702157974243),
new google.maps.LatLng(10.492089713821567, -66.8468365073204)];

    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492047516016523, -66.84621423482895),
new google.maps.LatLng(10.491401361408071, -66.84618473052979),
new google.maps.LatLng(10.491385537196654, -66.84642612934113),
new google.maps.LatLng(10.492026417111852, -66.84644222259521),
new google.maps.LatLng(10.492043629713399, -66.84621405099705)];

    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.4920251330868, -66.84644218911166),
new google.maps.LatLng(10.491715208100725, -66.84644758701324),
new google.maps.LatLng(10.491704658637232, -66.84667021036148),
new google.maps.LatLng(10.492021142385466, -66.84668362140656),
new google.maps.LatLng(10.492022478620584, -66.84644227394728)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.491704658637232, -66.84667021036148),
new google.maps.LatLng(10.492014611207251, -66.8466833592131),
new google.maps.LatLng(10.492015867658967, -66.84683382511139),
new google.maps.LatLng(10.491717845466539, -66.84681504964828),
new google.maps.LatLng(10.491704658637232, -66.84667021036148)];

    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);




var R3ECoord = [
new google.maps.LatLng(10.492011840897613, -66.8468335484065),
new google.maps.LatLng(10.491719234034157, -66.84681512920758),
new google.maps.LatLng(10.491712570734888, -66.84695184230804),
new google.maps.LatLng(10.492007955569088, -66.84698939323425),
new google.maps.LatLng(10.492010592932406, -66.84682846069336)];

    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);


var R3ECoord = [
new google.maps.LatLng(10.49200802111864, -66.84698539338353),
new google.maps.LatLng(10.491707296003145, -66.84695452451706),
new google.maps.LatLng(10.491691471807366, -66.84715032577515),
new google.maps.LatLng(10.491992131388674, -66.84716641902924),
new google.maps.LatLng(10.492005318205727, -66.8469974398613)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.491980349213225, -66.84716586598995),
new google.maps.LatLng(10.491691590034131, -66.84714888293166),
new google.maps.LatLng(10.491683559709188, -66.84734344482422),
new google.maps.LatLng(10.491971032480222, -66.8473756313324),
new google.maps.LatLng(10.491986856661704, -66.84716373682022)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.491396086671026, -66.84643149375916),
new google.maps.LatLng(10.491715208100725, -66.8464395403862),
new google.maps.LatLng(10.491704851904018, -66.84666613188881),
new google.maps.LatLng(10.491396086671026, -66.84664875268936),
new google.maps.LatLng(10.491396086671026, -66.8464395403862),
new google.maps.LatLng(10.491402730245564, -66.84664909917797),
new google.maps.LatLng(10.491705923296369, -66.84667026113101),
new google.maps.LatLng(10.49172575756385, -66.84681236743927),
new google.maps.LatLng(10.491380262459343, -66.84681504964828),
new google.maps.LatLng(10.491399964899829, -66.84664895495428)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.491717845466539, -66.84681504964828),
new google.maps.LatLng(10.491393449302466, -66.84682041406631),
new google.maps.LatLng(10.491385537196654, -66.84694111347198),
new google.maps.LatLng(10.491706950119097, -66.84695839393333),
new google.maps.LatLng(10.491712570734888, -66.84680700302124)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.491695331748296, -66.84714788588536),
new google.maps.LatLng(10.491706045198773, -66.84695714416517),
new google.maps.LatLng(10.491382899828004, -66.84693843126297),
new google.maps.LatLng(10.491372350353174, -66.84712886810303),
new google.maps.LatLng(10.491694208087626, -66.84714621510187)];

    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.491683559709188, -66.84735149145126),
new google.maps.LatLng(10.491688834441323, -66.84715032577515),
new google.maps.LatLng(10.491376361557688, -66.84712906872937),
new google.maps.LatLng(10.491367075615635, -66.84734612703323),
new google.maps.LatLng(10.491686197075255, -66.8473568558693)];

    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492775427346734, -66.84617936611176),
new google.maps.LatLng(10.492448394932001, -66.84616059064865),
new google.maps.LatLng(10.49245366965112, -66.84597551822662),
new google.maps.LatLng(10.492788614130404, -66.84600234031677),
new google.maps.LatLng(10.492771558349924, -66.84617914338753)];

    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492788268247565, -66.84600620973305),
new google.maps.LatLng(10.492453556186536, -66.84597949932277),
new google.maps.LatLng(10.492477405885996, -66.84579581022263),
new google.maps.LatLng(10.492809712983096, -66.84579849243164),
new google.maps.LatLng(10.492787207717637, -66.84600491943888)];

    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492803131137894, -66.84579843618138),
new google.maps.LatLng(10.492477405885996, -66.84578508138657),
new google.maps.LatLng(10.492464219089067, -66.84550076723099),
new google.maps.LatLng(10.492778064703513, -66.84548199176788),
new google.maps.LatLng(10.492804438270056, -66.84579849243164)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492774194781417, -66.84548221246337),
new google.maps.LatLng(10.492469493807894, -66.84551149606705),
new google.maps.LatLng(10.492456307010636, -66.84513062238693),
new google.maps.LatLng(10.492733229635222, -66.84511184692383),
new google.maps.LatLng(10.492778064703513, -66.84547930955887)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492456444502364, -66.84513459355492),
new google.maps.LatLng(10.492734015389958, -66.84511828687135),
new google.maps.LatLng(10.492714768134633, -66.84485703706741),
new google.maps.LatLng(10.492432570774133, -66.84484630823135),
new google.maps.LatLng(10.492456307010636, -66.84512794017792)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492705597028424, -66.84485669994433),
new google.maps.LatLng(10.492427296054668, -66.84484630823135),
new google.maps.LatLng(10.492456307010636, -66.84465855360031),
new google.maps.LatLng(10.492735866992358, -66.8447095155716),
new google.maps.LatLng(10.492710769659285, -66.84485689008642)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492456307010636, -66.8446558713913),
new google.maps.LatLng(10.492727954920886, -66.84471487998962),
new google.maps.LatLng(10.492825537121677, -66.84443861246109),
new google.maps.LatLng(10.492596087033075, -66.8443313241005),
new google.maps.LatLng(10.492461581729618, -66.84466391801834)];

    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492821770928433, -66.84443685142958),
new google.maps.LatLng(10.492593449674755, -66.8443313241005),
new google.maps.LatLng(10.492693669275466, -66.84418648481369),
new google.maps.LatLng(10.492878284244417, -66.84433668851852),
new google.maps.LatLng(10.492822899765304, -66.84443593025208)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492878284244417, -66.84433668851852),
new google.maps.LatLng(10.492688394560444, -66.84418648481369),
new google.maps.LatLng(10.49291256986938, -66.84391021728516),
new google.maps.LatLng(10.493086635291345, -66.84408456087112),
new google.maps.LatLng(10.49287300953255, -66.84434205293655)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);
var R3ECoord = [
new google.maps.LatLng(10.492909932513745, -66.84390753507614),
new google.maps.LatLng(10.49268985773586, -66.84418763595329),
new google.maps.LatLng(10.492303340121246, -66.84386730194092),
new google.maps.LatLng(10.492577625524302, -66.84356421232224),
new google.maps.LatLng(10.492904657802411, -66.84391289949417)];

    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492305811423925, -66.84386457111435),
new google.maps.LatLng(10.49269103191796, -66.84417575597763),
new google.maps.LatLng(10.492588174958026, -66.84433668851852),
new google.maps.LatLng(10.49220312039409, -66.84407651424408),
new google.maps.LatLng(10.492303340121246, -66.84387534856796)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.49220312039409, -66.84407651424408),
new google.maps.LatLng(10.492588174958026, -66.84433668851852),
new google.maps.LatLng(10.4924659432528, -66.8446579565213),
new google.maps.LatLng(10.492055428105413, -66.84447348117828),
new google.maps.LatLng(10.49220312039409, -66.84407383203506)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492058065468326, -66.84447884559631),
new google.maps.LatLng(10.49245526409542, -66.84466530319418),
new google.maps.LatLng(10.492419383975296, -66.84484630823135),
new google.maps.LatLng(10.492039603927443, -66.84485971927643),
new google.maps.LatLng(10.492050153379513, -66.8444761633873)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492036966564378, -66.84486240148544),
new google.maps.LatLng(10.492427934515296, -66.84484217620849),
new google.maps.LatLng(10.492465577096773, -66.84513290341602),
new google.maps.LatLng(10.49206597755695, -66.84516549110413),
new google.maps.LatLng(10.492036966564378, -66.84485703706741)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492060702831226, -66.84516549110413),
new google.maps.LatLng(10.492449716334448, -66.8451346807741),
new google.maps.LatLng(10.492469170816602, -66.84550216712381),
new google.maps.LatLng(10.49213191162085, -66.84554100036621),
new google.maps.LatLng(10.492060702831226, -66.84516549110413)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492129274258561, -66.84554368257523),
new google.maps.LatLng(10.492455017281387, -66.84550505973607),
new google.maps.LatLng(10.492477405885996, -66.8457904458046),
new google.maps.LatLng(10.492147735794099, -66.84578508138657),
new google.maps.LatLng(10.492129274258561, -66.84554100036621)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492154348605396, -66.8457851889907),
new google.maps.LatLng(10.49247872456566, -66.84579581022263),
new google.maps.LatLng(10.492451032291568, -66.8459701538086),
new google.maps.LatLng(10.49212663689626, -66.84596747159958),
new google.maps.LatLng(10.492147735794099, -66.84578508138657)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492133240586476, -66.8459675262011),
new google.maps.LatLng(10.492444428608131, -66.84597009920708),
new google.maps.LatLng(10.492445757572423, -66.84616327285767),
new google.maps.LatLng(10.49211872480919, -66.84614986181259),
new google.maps.LatLng(10.49213191162085, -66.84595942497253)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492055428105413, -66.84614717960358),
new google.maps.LatLng(10.49207125228257, -66.84589505195618),
new google.maps.LatLng(10.491767955412787, -66.84588968753815),
new google.maps.LatLng(10.491741581757875, -66.84611767530441),
new google.maps.LatLng(10.492052790742477, -66.8461525440216)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.491738944392266, -66.84612303972244),
new google.maps.LatLng(10.491778504874116, -66.84588700532913),
new google.maps.LatLng(10.49159652661572, -66.845862865448),
new google.maps.LatLng(10.491578065047307, -66.84612303972244),
new google.maps.LatLng(10.49173366966097, -66.84612572193146)];

    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);


var R3ECoord = [
new google.maps.LatLng(10.4915886145151, -66.84586554765701),
new google.maps.LatLng(10.491572790313263, -66.84613108634949),
new google.maps.LatLng(10.491398724039561, -66.84612035751343),
new google.maps.LatLng(10.491377625090626, -66.84583604335785),
new google.maps.LatLng(10.4915886145151, -66.84585481882095)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492067325740365, -66.84589496788652),
new google.maps.LatLng(10.491775867508812, -66.84589505195618),
new google.maps.LatLng(10.491744219123472, -66.84556245803833),
new google.maps.LatLng(10.492044878653521, -66.8455383181572),
new google.maps.LatLng(10.49207125228257, -66.84589236974716)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492043676720815, -66.84553841882297),
new google.maps.LatLng(10.491741581757875, -66.84557050466537),
new google.maps.LatLng(10.49172575756385, -66.84538006782532),
new google.maps.LatLng(10.492015867658967, -66.84533715248108),
new google.maps.LatLng(10.49204520818751, -66.84554242359047)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.49173366966097, -66.84538811445236),
new google.maps.LatLng(10.492006261097295, -66.84533860476523),
new google.maps.LatLng(10.491989494025201, -66.84513866901398),
new google.maps.LatLng(10.491683559709188, -66.84518158435822),
new google.maps.LatLng(10.491717845466539, -66.84538275003433)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.491684707696281, -66.8451883199711),
new google.maps.LatLng(10.491985796538808, -66.84513919781432),
new google.maps.LatLng(10.491965757752896, -66.84494018554688),
new google.maps.LatLng(10.491667735512186, -66.84500455856323),
new google.maps.LatLng(10.49168092234307, -66.84518158435822)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.49166843834831, -66.84501399374312),
new google.maps.LatLng(10.491966477553222, -66.84494695691427),
new google.maps.LatLng(10.491942021478748, -66.84476852416992),
new google.maps.LatLng(10.491641361848739, -66.84477120637894),
new google.maps.LatLng(10.49166509814594, -66.84501260519028)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.491947296206492, -66.84477388858795),
new google.maps.LatLng(10.49163608711579, -66.84476852416992),
new google.maps.LatLng(10.491646636581612, -66.84452444314957),
new google.maps.LatLng(10.491968395116572, -66.84458881616592),
new google.maps.LatLng(10.491947296206492, -66.84477120637894)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.491964835444861, -66.84458810505527),
new google.maps.LatLng(10.491651911314396, -66.8445137143135),
new google.maps.LatLng(10.491691471807366, -66.8443500995636),
new google.maps.LatLng(10.491992131388674, -66.84445202350616),
new google.maps.LatLng(10.49197366984386, -66.84459149837494)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);
var R3ECoord = [
new google.maps.LatLng(10.491986856661704, -66.8444573879242),
new google.maps.LatLng(10.491691471807366, -66.84434741735458),
new google.maps.LatLng(10.49173366966097, -66.84419453144073),
new google.maps.LatLng(10.492026417111852, -66.84430450201035),
new google.maps.LatLng(10.491997406115567, -66.8444573879242)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.49172575756385, -66.84419184923172),
new google.maps.LatLng(10.492023372242725, -66.8443033506939),
new google.maps.LatLng(10.49206597755695, -66.84415429830551),
new google.maps.LatLng(10.491812790620957, -66.84399336576462),
new google.maps.LatLng(10.491727346314192, -66.84419244326261)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.49182070271584, -66.8439906835556),
new google.maps.LatLng(10.492068614919772, -66.84414893388748),
new google.maps.LatLng(10.492134548983113, -66.84397995471954),
new google.maps.LatLng(10.491897186289302, -66.84381633996964),
new google.maps.LatLng(10.491818065350905, -66.84399336576462)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);


var R3ECoord = [
new google.maps.LatLng(10.492132654491291, -66.84398481001995),
new google.maps.LatLng(10.49189747744575, -66.84381654066448),
new google.maps.LatLng(10.49215828524248, -66.84330403804779),
new google.maps.LatLng(10.492506416837259, -66.84351861476898),
new google.maps.LatLng(10.49229806539957, -66.84376001358032),
new google.maps.LatLng(10.49220839511738, -66.8438646197319),
new google.maps.LatLng(10.492129167566283, -66.84398334368723)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492150373156223, -66.8433067202568),
new google.maps.LatLng(10.491894548925016, -66.84381365776062),
new google.maps.LatLng(10.491638724482277, -66.84378683567047),
new google.maps.LatLng(10.491607076082902, -66.84331476688385),
new google.maps.LatLng(10.492155834594193, -66.84330885371747)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.491609713449645, -66.84330940246582),
new google.maps.LatLng(10.49161235081636, -66.84355080127716),
new google.maps.LatLng(10.491074327540895, -66.84364199638367),
new google.maps.LatLng(10.491037404340622, -66.84340864419937),
new google.maps.LatLng(10.491601801349356, -66.84331476688385)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.491621927850387, -66.84355211997286),
new google.maps.LatLng(10.491074327540895, -66.84365004301071),
new google.maps.LatLng(10.491119162849584, -66.84391289949417),
new google.maps.LatLng(10.491638724482277, -66.84379756450653),
new google.maps.LatLng(10.49162026291637, -66.84356421232224)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);
var R3ECoord = [
new google.maps.LatLng(10.491818065350905, -66.84399336576462),
new google.maps.LatLng(10.491893491468533, -66.84382463270578),
new google.maps.LatLng(10.491646636581612, -66.84379488229752),
new google.maps.LatLng(10.491119162849584, -66.84391289949417),
new google.maps.LatLng(10.491140261816124, -66.84408992528915),
new google.maps.LatLng(10.491817408710302, -66.84399631792093)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.491140261816124, -66.8440979719162),
new google.maps.LatLng(10.491818065350905, -66.84399604797363),
new google.maps.LatLng(10.49173834798287, -66.84419655676663),
new google.maps.LatLng(10.491163998151773, -66.8442776799202),
new google.maps.LatLng(10.4911397701434, -66.84408580002741)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.491168054044898, -66.84427718493839),
new google.maps.LatLng(10.491724530380539, -66.84419923095629),
new google.maps.LatLng(10.491654548680755, -66.84452176094055),
new google.maps.LatLng(10.491219382927863, -66.84458076953888),
new google.maps.LatLng(10.491174547633701, -66.84428572654724)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.491224657667923, -66.84459418058395),
new google.maps.LatLng(10.491643999215187, -66.8445298075676),
new google.maps.LatLng(10.491633449749276, -66.84477388858795),
new google.maps.LatLng(10.491258943476149, -66.84484630823135),
new google.maps.LatLng(10.491228625239817, -66.84457951627962)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.491253668736675, -66.84484630823135),
new google.maps.LatLng(10.491641480645267, -66.84477239944084),
new google.maps.LatLng(10.491674314121555, -66.84500314613183),
new google.maps.LatLng(10.491311690865983, -66.84506356716156),
new google.maps.LatLng(10.491254698869048, -66.84484610867969)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.491312758086245, -66.84506338494703),
new google.maps.LatLng(10.491673010244613, -66.84501260519028),
new google.maps.LatLng(10.491684186959862, -66.84518526464154),
new google.maps.LatLng(10.491314328235243, -66.8452513217926),
new google.maps.LatLng(10.491310774199881, -66.84506016718746)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.491311690865983, -66.8452513217926),
new google.maps.LatLng(10.491687621252938, -66.84518099427225),
new google.maps.LatLng(10.49172723815106, -66.84537984638973),
new google.maps.LatLng(10.491338064557533, -66.84545248746872),
new google.maps.LatLng(10.491317841211053, -66.84525018453598)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.491345976664551, -66.84545785188675),
new google.maps.LatLng(10.491728190222636, -66.84537904076649),
new google.maps.LatLng(10.491749493854577, -66.84565365314484),
new google.maps.LatLng(10.491367075615635, -66.84569120407104),
new google.maps.LatLng(10.491343339295568, -66.84545785188675)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.491369712984424, -66.84584140777588),
new google.maps.LatLng(10.491765318047392, -66.84588968753815),
new google.maps.LatLng(10.49175213122011, -66.84565901756287),
new google.maps.LatLng(10.491364438246832, -66.84569388628006),
new google.maps.LatLng(10.491367075615635, -66.84584140777588)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.490966195299084, -66.84341669082642),
new google.maps.LatLng(10.49065762259639, -66.84345960617065),
new google.maps.LatLng(10.490702457965472, -66.8437734246254),
new google.maps.LatLng(10.491005755879737, -66.84370368719101),
new google.maps.LatLng(10.490968832671284, -66.8434140086174)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.491005558509679, -66.84370219290128),
new google.maps.LatLng(10.490699820590995, -66.84377610683441),
new google.maps.LatLng(10.490734106457374, -66.8439182639122),
new google.maps.LatLng(10.491037404340622, -66.8438646197319),
new google.maps.LatLng(10.491013667995265, -66.84370368719101)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.491037404340622, -66.84386998414993),
new google.maps.LatLng(10.490728831708942, -66.84392362833023),
new google.maps.LatLng(10.490744655953957, -66.84411406517029),
new google.maps.LatLng(10.491069052798263, -66.84405505657196),
new google.maps.LatLng(10.491034766969008, -66.84387534856796)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.491063778055556, -66.84406042098999),
new google.maps.LatLng(10.490748717928978, -66.84411332628724),
new google.maps.LatLng(10.490760480198148, -66.84428036212921),
new google.maps.LatLng(10.491092789139369, -66.84421330690384),
new google.maps.LatLng(10.491067772048153, -66.84404834356366)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.491085690245948, -66.8442147393605),
new google.maps.LatLng(10.490767075630881, -66.84427903126527),
new google.maps.LatLng(10.49079740343146, -66.84446007013321),
new google.maps.LatLng(10.491119162849584, -66.84441179037094),
new google.maps.LatLng(10.491086697181203, -66.84421453617517)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.491118988276265, -66.84441069553333),
new google.maps.LatLng(10.490794766057808, -66.8444573879242),
new google.maps.LatLng(10.490831689287038, -66.8447095155716),
new google.maps.LatLng(10.49116136078124, -66.8446746468544),
new google.maps.LatLng(10.491116837082625, -66.84439720430834)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.49115872341067, -66.84466928243637),
new google.maps.LatLng(10.490842238780276, -66.84470146894455),
new google.maps.LatLng(10.490839601407009, -66.84486508369446),
new google.maps.LatLng(10.491187734485603, -66.84483289718628),
new google.maps.LatLng(10.491166635522292, -66.84467196464539)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.491185097115274, -66.84483826160431),
new google.maps.LatLng(10.490834326660382, -66.84486240148544),
new google.maps.LatLng(10.49088179937678, -66.84501260519028),
new google.maps.LatLng(10.49120092133693, -66.84497505426407),
new google.maps.LatLng(10.491185097115274, -66.84483826160431)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.4912005024605, -66.84497093628437),
new google.maps.LatLng(10.490890757681232, -66.84501155107148),
new google.maps.LatLng(10.490900260986756, -66.8452513217926),
new google.maps.LatLng(10.491240481887584, -66.84524595737457),
new google.maps.LatLng(10.49120092133693, -66.84496968984604)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.491231294811813, -66.8452462169098),
new google.maps.LatLng(10.490900086203075, -66.84524736674246),
new google.maps.LatLng(10.490916085222993, -66.84549540281296),
new google.maps.LatLng(10.491248393997097, -66.84549272060394),
new google.maps.LatLng(10.491239514235259, -66.84523919986162)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.490918722595625, -66.84550076723099),
new google.maps.LatLng(10.49124835108219, -66.84549133852704),
new google.maps.LatLng(10.491295866649972, -66.84572607278824),
new google.maps.LatLng(10.490960920554622, -66.8457368016243),
new google.maps.LatLng(10.490917392735575, -66.84549539163868)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.490960207857723, -66.84573267018948),
new google.maps.LatLng(10.491294503374034, -66.84572612143575),
new google.maps.LatLng(10.491301141388735, -66.8458816409111),
new google.maps.LatLng(10.491003118507853, -66.84591919183731),
new google.maps.LatLng(10.490967485604536, -66.84573130629138)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.491301069844333, -66.84588023420258),
new google.maps.LatLng(10.491003118507853, -66.84592455625534),
new google.maps.LatLng(10.491011030623447, -66.84610694646835),
new google.maps.LatLng(10.491324877712044, -66.84611231088638),
new google.maps.LatLng(10.491301141388735, -66.84587895870209)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.491008393251594, -66.84610426425934),
new google.maps.LatLng(10.491327515081176, -66.84611767530441),
new google.maps.LatLng(10.491327515081176, -66.84639930725098),
new google.maps.LatLng(10.491026854854013, -66.8463858962059),
new google.maps.LatLng(10.491003118507853, -66.84609889984131)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.491313094145474, -66.84639866959373),
new google.maps.LatLng(10.491021580110582, -66.84638321399689),
new google.maps.LatLng(10.491018942738826, -66.846584379673),
new google.maps.LatLng(10.491316965604478, -66.84661656618118),
new google.maps.LatLng(10.491322240342871, -66.84641271829605)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.4913103073887, -66.84661583695168),
new google.maps.LatLng(10.491018960552578, -66.84658302092868),
new google.maps.LatLng(10.491024217482321, -66.8467453122139),
new google.maps.LatLng(10.491314328235243, -66.84677749872208),
new google.maps.LatLng(10.491314328235243, -66.84662193059921)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.491313167665519, -66.84677736962664),
new google.maps.LatLng(10.491021580110582, -66.8467453122139),
new google.maps.LatLng(10.491047953826861, -66.84697061777115),
new google.maps.LatLng(10.491298504019372, -66.8470162153244),
new google.maps.LatLng(10.491310561473849, -66.84677707972799)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.491303778758084, -66.84701889753342),
new google.maps.LatLng(10.491298504019372, -66.84733808040619),
new google.maps.LatLng(10.49116136078124, -66.8473219871521),
new google.maps.LatLng(10.491153448669488, -66.84701085090637),
new google.maps.LatLng(10.491298504019372, -66.8470162153244)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.491153448669488, -66.84733003377914),
new google.maps.LatLng(10.490966195299084, -66.84731662273407),
new google.maps.LatLng(10.490923997340813, -66.84697061777115),
new google.maps.LatLng(10.491150811298853, -66.84701085090637)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.490960920554622, -66.8473219871521),
new google.maps.LatLng(10.490763117572103, -66.84730052947998),
new google.maps.LatLng(10.49078949131042, -66.84698134660721),
new google.maps.LatLng(10.490918722595625, -66.84696793556213)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.490628611471775, -66.84729248285294),
new google.maps.LatLng(10.490763218362304, -66.84729930968706),
new google.maps.LatLng(10.490786853936681, -66.84698402881622),
new google.maps.LatLng(10.490676084219738, -66.84694916009903),
new google.maps.LatLng(10.49062333672155, -66.84729248285294)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.490683996343702, -66.846943795681),
new google.maps.LatLng(10.490786853936681, -66.84698402881622),
new google.maps.LatLng(10.490923997340813, -66.84697061777115),
new google.maps.LatLng(10.491032129597368, -66.84699475765228),
new google.maps.LatLng(10.491022990190515, -66.84658479129916),
new google.maps.LatLng(10.490715644837488, -66.84653609991074),
new google.maps.LatLng(10.490681358969072, -66.84694647789001)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.491018942738826, -66.84658169746399),
new google.maps.LatLng(10.490713007463125, -66.84653878211975),
new google.maps.LatLng(10.490728831708942, -66.84607207775116),
new google.maps.LatLng(10.491004328061171, -66.84611366123988),
new google.maps.LatLng(10.491017470180607, -66.84658149089944)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.490726194334695, -66.84607744216919),
new google.maps.LatLng(10.491003160951683, -66.8461162880576),
new google.maps.LatLng(10.49096954273303, -66.84574845891734),
new google.maps.LatLng(10.490713007463125, -66.84570729732513),
new google.maps.LatLng(10.490726194334695, -66.84606939554214)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.490835728163837, -66.84486230503461),
new google.maps.LatLng(10.490591688218325, -66.84488654136658),
new google.maps.LatLng(10.490552127584722, -66.84460759162903),
new google.maps.LatLng(10.490805315552318, -66.84455126523972),
new google.maps.LatLng(10.490836964033699, -66.84471756219864),
new google.maps.LatLng(10.490829051913655, -66.84487044811249)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.490553032308986, -66.84461397101575),
new google.maps.LatLng(10.49080267817872, -66.84455662965775),
new google.maps.LatLng(10.490760480198148, -66.84428572654724),
new google.maps.LatLng(10.490502017441575, -66.84433668851852),
new google.maps.LatLng(10.49055617726317, -66.8446120456374)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.49049938006539, -66.8443313241005),
new google.maps.LatLng(10.490756421050653, -66.84428652690337),
new google.maps.LatLng(10.490729154302883, -66.84392751058607),
new google.maps.LatLng(10.490459819419996, -66.84400141239166),
new google.maps.LatLng(10.490508530087025, -66.84432955161225)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.49046315203617, -66.84400047092862),
new google.maps.LatLng(10.490728831708942, -66.84392094612122),
new google.maps.LatLng(10.490697183216506, -66.84376806020737),
new google.maps.LatLng(10.490446632537079, -66.84382170438766),
new google.maps.LatLng(10.490459819419996, -66.84399604797363)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.490448166765832, -66.84382136188083),
new google.maps.LatLng(10.490697183216506, -66.84376806020737),
new google.maps.LatLng(10.490659094098357, -66.84345940151877),
new google.maps.LatLng(10.490399159753903, -66.84350788593292),
new google.maps.LatLng(10.490449269913706, -66.84382170438766)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.490562677087501, -66.84728980064392),
new google.maps.LatLng(10.490309488921364, -66.84726566076279),
new google.maps.LatLng(10.490317401054691, -66.84700012207031),
new google.maps.LatLng(10.490599600344426, -66.84703767299652),
new google.maps.LatLng(10.490562677087501, -66.84728980064392)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);


var R3ECoord = [
new google.maps.LatLng(10.490304214165704, -66.8472683429718),
new google.maps.LatLng(10.490080036966868, -66.84726297855377),
new google.maps.LatLng(10.49010904814292, -66.84696793556213),
new google.maps.LatLng(10.490317282493676, -66.84700410109048)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.490599600344426, -66.84703767299652),
new google.maps.LatLng(10.490620699346412, -66.84676676988602),
new google.maps.LatLng(10.490388610245537, -66.84673726558685),
new google.maps.LatLng(10.490317401054691, -66.84700280427933)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.490313338011731, -66.84700212431216),
new google.maps.LatLng(10.49010904814292, -66.84696525335312),
new google.maps.LatLng(10.490124872419626, -66.84668362140656),
new google.maps.LatLng(10.49039266832729, -66.84673778965845),
new google.maps.LatLng(10.49031212629916, -66.84700012207031)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.490393385857741, -66.8467388703425),
new google.maps.LatLng(10.49062060376886, -66.84676799706523),
new google.maps.LatLng(10.490644435721908, -66.84646099805832),
new google.maps.LatLng(10.490409709261897, -66.84644222259521),
new google.maps.LatLng(10.490392366140055, -66.84673696270875)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.49012589329342, -66.84668382498035),
new google.maps.LatLng(10.49038678868794, -66.84673585050064),
new google.maps.LatLng(10.490409118896714, -66.84645165746247),
new google.maps.LatLng(10.490124872419626, -66.84639126062393),
new google.maps.LatLng(10.490122235040227, -66.84667557477951)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.490413549112743, -66.8464425066042),
new google.maps.LatLng(10.490643025228982, -66.84646088938632),
new google.maps.LatLng(10.490647073096842, -66.84622764587402),
new google.maps.LatLng(10.49041762139267, -66.84623301029205),
new google.maps.LatLng(10.490412346638843, -66.84644222259521)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.490414984015763, -66.84623569250107),
new google.maps.LatLng(10.490407071884942, -66.84644758701324),
new google.maps.LatLng(10.490116960281375, -66.84638857841492),
new google.maps.LatLng(10.49010904814292, -66.84616327285767),
new google.maps.LatLng(10.490412346638843, -66.84623837471008)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.490641798346934, -66.84623301029205),
new google.maps.LatLng(10.490411404852988, -66.8462381415078),
new google.maps.LatLng(10.490396522376841, -66.84603989124298),
new google.maps.LatLng(10.490647073096842, -66.84605598449707),
new google.maps.LatLng(10.49065762259639, -66.84622496366501)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.49011432290191, -66.84617131948471),
new google.maps.LatLng(10.490408308867247, -66.84623737488886),
new google.maps.LatLng(10.490397747706893, -66.84603997432026),
new google.maps.LatLng(10.490399159753903, -66.8459165096283),
new google.maps.LatLng(10.490098498624668, -66.84595137834549),
new google.maps.LatLng(10.490109320108397, -66.84616991097636)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.490643052636814, -66.84605574038926),
new google.maps.LatLng(10.49039655165334, -66.84603852163127),
new google.maps.LatLng(10.490401797130936, -66.84591382741928),
new google.maps.LatLng(10.490391247622659, -66.84569656848907),
new google.maps.LatLng(10.490636523596937, -66.8457019329071),
new google.maps.LatLng(10.490641798346934, -66.84605598449707)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.490095861245052, -66.84595137834549),
new google.maps.LatLng(10.490401728960936, -66.84591242351104),
new google.maps.LatLng(10.490385972868388, -66.84569120407104),
new google.maps.LatLng(10.490325313187816, -66.84546321630478),
new google.maps.LatLng(10.490014102465704, -66.84551417827606),
new google.maps.LatLng(10.490093223865411, -66.84595674276352)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.4900207362572, -66.84551309196729),
new google.maps.LatLng(10.490321250130707, -66.8454638816466),
new google.maps.LatLng(10.490259378738926, -66.84519231319427),
new google.maps.LatLng(10.489990366041841, -66.84521645307541),
new google.maps.LatLng(10.490024651986829, -66.84553027153015)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.489987728661308, -66.84521913528442),
new google.maps.LatLng(10.490260170198193, -66.84519584781083),
new google.maps.LatLng(10.490240917090722, -66.84502869844437),
new google.maps.LatLng(10.489969266996892, -66.84503942728043),
new google.maps.LatLng(10.489991073631748, -66.8452229296289)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);



var R3ECoord = [
new google.maps.LatLng(10.490241341523694, -66.84503252160846),
new google.maps.LatLng(10.48996399223542, -66.84503942728043),
new google.maps.LatLng(10.489937618426762, -66.84488922357559),
new google.maps.LatLng(10.490225092819955, -66.84486240148544),
new google.maps.LatLng(10.490237018114588, -66.84502885243472)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.490393884999758, -66.8449991941452),
new google.maps.LatLng(10.490240917090722, -66.8449991941452),
new google.maps.LatLng(10.490214543305662, -66.84482216835022),
new google.maps.LatLng(10.490502017441575, -66.8448007106781),
new google.maps.LatLng(10.490523116450198, -66.84489995241165),
new google.maps.LatLng(10.490382016802634, -66.8449991941452)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.489932343664755, -66.84488922357559),
new google.maps.LatLng(10.490218692824305, -66.84485030203405),
new google.maps.LatLng(10.49014860883316, -66.84463441371918),
new google.maps.LatLng(10.489900695090844, -66.84467196464539),
new google.maps.LatLng(10.489933459747945, -66.84488906737556)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.490214765774025, -66.84482367668295),
new google.maps.LatLng(10.490145971453963, -66.84464246034622),
new google.maps.LatLng(10.490467731549483, -66.84460759162903),
new google.maps.LatLng(10.490502017441575, -66.8448007106781),
new google.maps.LatLng(10.490211282745042, -66.84482327073096)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.489903332472128, -66.84466660022736),
new google.maps.LatLng(10.490141966328471, -66.84463541984451),
new google.maps.LatLng(10.49010113600426, -66.84430986642838),
new google.maps.LatLng(10.489847947460474, -66.84432327747345),
new google.maps.LatLng(10.48989805770955, -66.84466928243637)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.49010641076338, -66.8443152308464),
new google.maps.LatLng(10.490147795724178, -66.84464731261414),
new google.maps.LatLng(10.49048091843151, -66.84461027383804),
new google.maps.LatLng(10.490422896146393, -66.84426158666611),
new google.maps.LatLng(10.490095861245052, -66.84431791305542)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.490420258769538, -66.84425890445709),
new google.maps.LatLng(10.490393884999758, -66.84399604797363),
new google.maps.LatLng(10.490127509798988, -66.84403091669083),
new google.maps.LatLng(10.490099489913897, -66.84431728807715)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.48984531007872, -66.84432864189148),
new google.maps.LatLng(10.490090586485742, -66.84431791305542),
new google.maps.LatLng(10.490132784557675, -66.84402823448181),
new google.maps.LatLng(10.489834760551474, -66.8440443277359),
new google.maps.LatLng(10.489851824334565, -66.84432307212091)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.489829485787725, -66.84403359889984),
new google.maps.LatLng(10.490132784557675, -66.84402287006378),
new google.maps.LatLng(10.490069487447613, -66.84382170438766),
new google.maps.LatLng(10.48979256243891, -66.84385389089584),
new google.maps.LatLng(10.489824211023874, -66.84403628110886)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.490142279886022, -66.84402898327596),
new google.maps.LatLng(10.490388610245537, -66.84400141239166),
new google.maps.LatLng(10.490356961718305, -66.84379488229752),
new google.maps.LatLng(10.490077399587086, -66.8438270688057),
new google.maps.LatLng(10.490135421936971, -66.84401750564575)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.490354324340876, -66.8437922000885),
new google.maps.LatLng(10.490322675810134, -66.84351325035095),
new google.maps.LatLng(10.490027289367056, -66.84356421232224),
new google.maps.LatLng(10.490070513307984, -66.84382496469254)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.489792748294697, -66.84385496197933),
new google.maps.LatLng(10.490061575307951, -66.84381902217865),
new google.maps.LatLng(10.4900339158231, -66.84356306908393),
new google.maps.LatLng(10.489753001703148, -66.84360444545746),
new google.maps.LatLng(10.489784650292172, -66.84385657310486)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.490016739846022, -66.84724688529968),
new google.maps.LatLng(10.489869046513704, -66.84723883867264),
new google.maps.LatLng(10.489842672696941, -66.84694916009903),
new google.maps.LatLng(10.490037838887737, -66.84692233800888),
new google.maps.LatLng(10.490016739846022, -66.84724420309067)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.489866409132127, -66.84723615646362),
new google.maps.LatLng(10.489668605449964, -66.84722006320953),
new google.maps.LatLng(10.48962904469835, -66.84691965579987),
new google.maps.LatLng(10.489834760551474, -66.846943795681),
new google.maps.LatLng(10.489865194785217, -66.84723606498312)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.489842672696941, -66.84694916009903),
new google.maps.LatLng(10.490037838887737, -66.84691429138184),
new google.maps.LatLng(10.490061575307951, -66.84668093919754),
new google.maps.LatLng(10.489840035315149, -66.84669971466064),
new google.maps.LatLng(10.489840035315149, -66.846943795681)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.489843854971543, -66.84669939094579),
new google.maps.LatLng(10.489581571789744, -66.84668362140656),
new google.maps.LatLng(10.48963168208195, -66.84691697359085),
new google.maps.LatLng(10.489834916699714, -66.84694526460197)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.490061575307951, -66.84667825698853),
new google.maps.LatLng(10.490048388408061, -66.84646636247635),
new google.maps.LatLng(10.48984531007872, -66.84650123119354),
new google.maps.LatLng(10.489850584842216, -66.84669435024261),
new google.maps.LatLng(10.490056300548055, -66.84667825698853)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.489840035315149, -66.84668898582458),
new google.maps.LatLng(10.489588061491697, -66.84668402140665),
new google.maps.LatLng(10.489560472716922, -66.84651732444763),
new google.maps.LatLng(10.489834760551474, -66.84650391340256),
new google.maps.LatLng(10.489842672696941, -66.84669971466064)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.490047322730074, -66.84646654545418),
new google.maps.LatLng(10.48983350815395, -66.84650397463736),
new google.maps.LatLng(10.489808386731799, -66.84630542993546),
new google.maps.LatLng(10.490045751028012, -66.84626251459122),
new google.maps.LatLng(10.490048388408061, -66.84646368026733)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.489808509568777, -66.84630661672111),
new google.maps.LatLng(10.489833511862782, -66.84649451605048),
new google.maps.LatLng(10.489547285795675, -66.84651464223862),
new google.maps.LatLng(10.489542011027012, -66.84632420539856),
new google.maps.LatLng(10.489813661495917, -66.84630274772644)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.490045751028012, -66.8462598323822),
new google.maps.LatLng(10.489800474585454, -66.84631079435349),
new google.maps.LatLng(10.489803111967591, -66.84613645076752),
new google.maps.LatLng(10.49000619032463, -66.84607744216919),
new google.maps.LatLng(10.490045751028012, -66.84625446796417)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.489542011027012, -66.84631884098053),
new google.maps.LatLng(10.489800575687186, -66.84630411104519),
new google.maps.LatLng(10.489795199821122, -66.8461337685585),
new google.maps.LatLng(10.489520911951482, -66.84617400169373),
new google.maps.LatLng(10.489528824104987, -66.84632420539856)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.490011465085365, -66.84607475996017),
new google.maps.LatLng(10.48979532461432, -66.84613782981546),
new google.maps.LatLng(10.489771463380464, -66.84597283601761),
new google.maps.LatLng(10.489998278183336, -66.84592187404633),
new google.maps.LatLng(10.490024651986829, -66.84606939554214)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.489771623639237, -66.84597395878689),
new google.maps.LatLng(10.489791138047075, -66.84613436434853),
new google.maps.LatLng(10.489520911951482, -66.8461686372757),
new google.maps.LatLng(10.489494538105063, -66.84600234031677),
new google.maps.LatLng(10.489774100762853, -66.8459701538086)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);
var R3ECoord = [
new google.maps.LatLng(10.490000915563792, -66.84591919183731),
new google.maps.LatLng(10.489772651361314, -66.84597032068064),
new google.maps.LatLng(10.489729265259259, -66.84578508138657),
new google.maps.LatLng(10.489974541758263, -66.84574484825134),
new google.maps.LatLng(10.490000915563792, -66.84591382741928)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.489730783449696, -66.8457917398622),
new google.maps.LatLng(10.489776738145219, -66.84596747159958),
new google.maps.LatLng(10.489497175489806, -66.84599965810776),
new google.maps.LatLng(10.489462889486385, -66.84583067893982),
new google.maps.LatLng(10.489721353110905, -66.84579312801361)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.489979816519543, -66.84574753046036),
new google.maps.LatLng(10.489734540024726, -66.84578239917755),
new google.maps.LatLng(10.48969497928156, -66.84561610221863),
new google.maps.LatLng(10.489956080093059, -66.84557855129242),
new google.maps.LatLng(10.48997717913891, -66.8457368016243)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.489692341898495, -66.84562683105469),
new google.maps.LatLng(10.489731902642005, -66.84578239917755),
new google.maps.LatLng(10.489460252101335, -66.84582263231277),
new google.maps.LatLng(10.489452339946098, -66.84563755989075),
new google.maps.LatLng(10.489699040851429, -66.84561551213267)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.489650143766504, -66.84541493654251),
new google.maps.LatLng(10.489685741328708, -66.84561735833631),
new google.maps.LatLng(10.489953442712233, -66.84558391571045),
new google.maps.LatLng(10.489929706283727, -66.84538543224335),
new google.maps.LatLng(10.4896448689996, -66.8454122543335)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.489689704515419, -66.8456107378006),
new google.maps.LatLng(10.489449702560975, -66.84564024209976),
new google.maps.LatLng(10.489373218382518, -66.84541493654251),
new google.maps.LatLng(10.489652781149925, -66.84540688991547),
new google.maps.LatLng(10.489682837942345, -66.84560676263163)];

    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.489916519378212, -66.8453049659729),
new google.maps.LatLng(10.489647506383069, -66.84534519910812),
new google.maps.LatLng(10.489621132547429, -66.84511989355087),
new google.maps.LatLng(10.48989805770955, -66.8450716137886),
new google.maps.LatLng(10.489924431521578, -66.84529691934586)];

    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.4898858719997, -66.84507383814281),
new google.maps.LatLng(10.48962640731474, -66.8451252579689),
new google.maps.LatLng(10.489592121325616, -66.84495627880096),
new google.maps.LatLng(10.489861134368914, -66.8449079990387),
new google.maps.LatLng(10.489890145565496, -66.84506088495255)];

    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.489863310453257, -66.84492039223687),
new google.maps.LatLng(10.489589483941687, -66.84496700763702),
new google.maps.LatLng(10.489576297021681, -66.84474438428879),
new google.maps.LatLng(10.489842672696941, -66.84472292661667),
new google.maps.LatLng(10.489855859605608, -66.84491872787476)];

    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.48957102225352, -66.8447282910347),
new google.maps.LatLng(10.489821573641917, -66.84471756219864),
new google.maps.LatLng(10.489789925056686, -66.84440910816193),
new google.maps.LatLng(10.48954992317996, -66.84446811676025),
new google.maps.LatLng(10.489563110101095, -66.84473633766174)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.489549985661638, -66.84446938763233),
new google.maps.LatLng(10.489789925056686, -66.84440642595291),
new google.maps.LatLng(10.489766188615633, -66.8441703915596),
new google.maps.LatLng(10.489505087643897, -66.84423476457596),
new google.maps.LatLng(10.489547285795675, -66.84446543455124)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.489755639085692, -66.84417843818665),
new google.maps.LatLng(10.489502450259216, -66.84423476457596),
new google.maps.LatLng(10.489486625950692, -66.84404969215393),
new google.maps.LatLng(10.489737177407434, -66.84401214122772),
new google.maps.LatLng(10.489760913850713, -66.84416770935059)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.489730914302779, -66.84401307989907),
new google.maps.LatLng(10.489486957479357, -66.84405356953113),
new google.maps.LatLng(10.489470801641353, -66.84386998414993),
new google.maps.LatLng(10.4897081661965, -66.84382438659668),
new google.maps.LatLng(10.489737177407434, -66.84400677680969)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.489705528813564, -66.84382975101471),
new google.maps.LatLng(10.489474380927035, -66.84386929657211),
new google.maps.LatLng(10.48942332870846, -66.84365004301071),
new google.maps.LatLng(10.489681792366047, -66.84361785650253),
new google.maps.LatLng(10.489702891430587, -66.84382170438766)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);


var R3ECoord = [
new google.maps.LatLng(10.48942738543353, -66.84364953782648),
new google.maps.LatLng(10.489468164256367, -66.84386730194092),
new google.maps.LatLng(10.489183326547433, -66.84391289949417),
new google.maps.LatLng(10.489138490958254, -66.84369832277298),
new google.maps.LatLng(10.489424787008343, -66.84364986140855)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.4891886013222, -66.8439182639122),
new google.maps.LatLng(10.489465526871381, -66.84387803077698),
new google.maps.LatLng(10.48949284493613, -66.844051354253),
new google.maps.LatLng(10.489217612581834, -66.84411138296127),
new google.maps.LatLng(10.489180689160017, -66.84392362833023)];

    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.489222887356016, -66.84411942958832),
new google.maps.LatLng(10.489494538105063, -66.84406042098999),
new google.maps.LatLng(10.489505716744828, -66.84423844338556),
new google.maps.LatLng(10.489257173386042, -66.84430450201035),
new google.maps.LatLng(10.489214975194711, -66.84411942958832)];

    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.489249261225602, -66.84430718421936),
new google.maps.LatLng(10.489528824104987, -66.84425085783005),
new google.maps.LatLng(10.489545581766913, -66.84445611972865),
new google.maps.LatLng(10.48926772293298, -66.84453248977661),
new google.maps.LatLng(10.489251898612444, -66.84430450201035)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);


var R3ECoord = [
new google.maps.LatLng(10.489272997706308, -66.84454321861267),
new google.maps.LatLng(10.48954464841135, -66.8444573879242),
new google.maps.LatLng(10.48957102225352, -66.84474170207977),
new google.maps.LatLng(10.48932047066224, -66.84480607509613),
new google.maps.LatLng(10.489278272479549, -66.8445485830307)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.489315195889723, -66.84481412172318),
new google.maps.LatLng(10.489576297021681, -66.84474438428879),
new google.maps.LatLng(10.489593587884443, -66.84496350676443),
new google.maps.LatLng(10.48935475668145, -66.84500455856323),
new google.maps.LatLng(10.489315195889723, -66.84481412172318)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.489358819731676, -66.84500387744737),
new google.maps.LatLng(10.489600033477288, -66.84497237205505),
new google.maps.LatLng(10.48962904469835, -66.84514939785004),
new google.maps.LatLng(10.4893837679255, -66.84518963098526),
new google.maps.LatLng(10.48935475668145, -66.84501260519028)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.4893837679255, -66.84520035982132),
new google.maps.LatLng(10.489615857780025, -66.84516817331314),
new google.maps.LatLng(10.489653768377227, -66.84534425831816),
new google.maps.LatLng(10.489428603479144, -66.84533447027206),
new google.maps.LatLng(10.489384886005862, -66.84520020476464)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.49049146793672, -66.843341588974),
new google.maps.LatLng(10.490465094173008, -66.8431431055069),
new google.maps.LatLng(10.49036751122774, -66.84314578771591),
new google.maps.LatLng(10.490383335491227, -66.84336572885513),
new google.maps.LatLng(10.490483555807845, -66.84335231781006)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);


var R3ECoord = [
new google.maps.LatLng(10.490375423359579, -66.84337109327316),
new google.maps.LatLng(10.490359599095695, -66.84315115213394),
new google.maps.LatLng(10.490211905927024, -66.84315651655197),
new google.maps.LatLng(10.49024619184746, -66.84338718652725),
new google.maps.LatLng(10.490375423359579, -66.84337109327316)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.490211905927024, -66.84315651655197),
new google.maps.LatLng(10.490248829225793, -66.8433952331543),
new google.maps.LatLng(10.490022014606591, -66.84341132640839),
new google.maps.LatLng(10.489979816519543, -66.84307873249054),
new google.maps.LatLng(10.490209268548373, -66.84315651655197)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.489979816519543, -66.84307873249054),
new google.maps.LatLng(10.490014102465704, -66.84341132640839),
new google.maps.LatLng(10.489863771750539, -66.84344619512558),
new google.maps.LatLng(10.489821573641917, -66.8431082367897),
new google.maps.LatLng(10.489974541758263, -66.84308677911758)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.489858496987274, -66.84345155954361),
new google.maps.LatLng(10.489818936259933, -66.84311896562576),
new google.maps.LatLng(10.489668605449964, -66.84312969446182),
new google.maps.LatLng(10.4897081661965, -66.84344083070755),
new google.maps.LatLng(10.489853222223918, -66.84345155954361)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.489655418533319, -66.84345424175262),
new google.maps.LatLng(10.489605308244958, -66.84313505887985),
new google.maps.LatLng(10.489444427790646, -66.84315383434296),
new google.maps.LatLng(10.489494538105063, -66.84348911046982),
new google.maps.LatLng(10.489650143766504, -66.84345692396164),
new google.maps.LatLng(10.489486625950692, -66.84349179267883),
new google.maps.LatLng(10.489346844523517, -66.84350788593292),
new google.maps.LatLng(10.489288822025763, -66.84317797422409),
new google.maps.LatLng(10.489439153020243, -66.84316188097)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.489341569751435, -66.84351325035095),
new google.maps.LatLng(10.48922816213012, -66.84353202581406),
new google.maps.LatLng(10.489180689160017, -66.84319943189621),
new google.maps.LatLng(10.489286184639237, -66.84318333864212),
new google.maps.LatLng(10.489338932365369, -66.84349983930588)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.489229237650424, -66.84353184775381),
new google.maps.LatLng(10.48917277699763, -66.84321016073227),
new google.maps.LatLng(10.489064644091327, -66.84322893619537),
new google.maps.LatLng(10.489098930138871, -66.8435400724411),
new google.maps.LatLng(10.489230799517129, -66.84353739023209)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);





var R3ECoord = [
new google.maps.LatLng(10.489445377585875, -66.84316018919509),
new google.maps.LatLng(10.489067281479734, -66.84322357177734),
new google.maps.LatLng(10.489035632817355, -66.84301167726517),
new google.maps.LatLng(10.48940486701037, -66.84297144412994),
new google.maps.LatLng(10.489437711490487, -66.84316203528886)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.489030358039981, -66.8430170416832),
new google.maps.LatLng(10.489405480450477, -66.84297513533579),
new google.maps.LatLng(10.489373218382518, -66.84282660484314),
new google.maps.LatLng(10.48903299542868, -66.84285074472427),
new google.maps.LatLng(10.48903152375981, -66.8430169159451)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.48903299542868, -66.84284269809723),
new google.maps.LatLng(10.48937058099672, -66.84282392263412),
new google.maps.LatLng(10.489259810772806, -66.84264153242111),
new google.maps.LatLng(10.489038270206018, -66.84263616800308),
new google.maps.LatLng(10.489030358039981, -66.84284001588821)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.48937181101767, -66.84282670920754),
new google.maps.LatLng(10.489594758709531, -66.84291779994965),
new google.maps.LatLng(10.48960794562876, -66.84312433004379),
new google.maps.LatLng(10.489448481808427, -66.8431533612212),
new google.maps.LatLng(10.489367943610906, -66.84283196926117)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.489668794853431, -66.84313118407692),
new google.maps.LatLng(10.48982684840582, -66.84311628341675),
new google.maps.LatLng(10.489784650292172, -66.84296071529388),
new google.maps.LatLng(10.489665968066683, -66.8429633975029),
new google.maps.LatLng(10.489665968066683, -66.84312969446182)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.489780666881574, -66.84296080531868),
new google.maps.LatLng(10.489826417099145, -66.8431146933558),
new google.maps.LatLng(10.489995640802853, -66.84308141469955),
new google.maps.LatLng(10.489779375527558, -66.84296071529388)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492226856648188, -66.84314578771591),
new google.maps.LatLng(10.49249586740076, -66.84301972389221),
new google.maps.LatLng(10.492466856448493, -66.8431967496872),
new google.maps.LatLng(10.49222949400965, -66.84315651655197)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492551251938423, -66.8432343006134),
new google.maps.LatLng(10.492464219089067, -66.84320747852325),
new google.maps.LatLng(10.492495190240948, -66.8430238559439),
new google.maps.LatLng(10.4926382847633, -66.84303849935532),
new google.maps.LatLng(10.492551251938423, -66.8432343006134)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492643559479164, -66.84303313493729),
new google.maps.LatLng(10.492791251487057, -66.84299290180206),
new google.maps.LatLng(10.492865097464575, -66.84323698282242),
new google.maps.LatLng(10.492746416420687, -66.84329062700272),
new google.maps.LatLng(10.492640922121238, -66.84304386377335)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492743779063641, -66.84329330921173),
new google.maps.LatLng(10.492559164014425, -66.84323966503143),
new google.maps.LatLng(10.49263315880451, -66.84305003143317),
new google.maps.LatLng(10.492733229635222, -66.84328526258469)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492858123425112, -66.84324013510934),
new google.maps.LatLng(10.492796526200339, -66.84299558401108),
new google.maps.LatLng(10.492962679622098, -66.84297144412994),
new google.maps.LatLng(10.493002239947465, -66.84320211410522),
new google.maps.LatLng(10.492864612761311, -66.84323538074625)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.492998772862974, -66.8432029278091),
new google.maps.LatLng(10.492965316977276, -66.84296607971191),
new google.maps.LatLng(10.493165755905299, -66.84297412633896),
new google.maps.LatLng(10.493126195600846, -66.84323161840439),
new google.maps.LatLng(10.493007514657135, -66.84321016073227)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);


var R3ECoord = [
new google.maps.LatLng(10.493120920893201, -66.84323698282242),
new google.maps.LatLng(10.49315922475127, -66.8429738641455),
new google.maps.LatLng(10.49333190912877, -66.84297144412994),
new google.maps.LatLng(10.493273887378331, -66.84329599142075),
new google.maps.LatLng(10.4931219371693, -66.84323023022682)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493276018359165, -66.84328407168391),
new google.maps.LatLng(10.493326634424625, -66.84296607971191),
new google.maps.LatLng(10.493487512860288, -66.84301435947418),
new google.maps.LatLng(10.493395205571359, -66.84332817792892),
new google.maps.LatLng(10.493269113915913, -66.84329387529118)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493387293516756, -66.84333086013794),
new google.maps.LatLng(10.493490150210988, -66.84300631284714),
new google.maps.LatLng(10.493658940609476, -66.84306800365448),
new google.maps.LatLng(10.493548171920855, -66.84337377548218),
new google.maps.LatLng(10.493384656165166, -66.8433228135109)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493544186103824, -66.84337253324628),
new google.maps.LatLng(10.49367212735549, -66.84306532144547),
new google.maps.LatLng(10.49379872008851, -66.84315383434296),
new google.maps.LatLng(10.493682676751874, -66.84344083070755),
new google.maps.LatLng(10.493543170137041, -66.84337312406893)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493681089273576, -66.84344006916012),
new google.maps.LatLng(10.493806632132591, -66.84315651655197),
new google.maps.LatLng(10.493946411544897, -66.84322893619537),
new google.maps.LatLng(10.493809269480593, -66.84349715709686),
new google.maps.LatLng(10.493674764704611, -66.8434327840805)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.493801357436563, -66.84350520372391),
new google.maps.LatLng(10.4939543235852, -66.84323161840439),
new google.maps.LatLng(10.494078278857067, -66.8432879447937),
new google.maps.LatLng(10.493938499504377, -66.84356421232224),
new google.maps.LatLng(10.493810093852442, -66.84349555321205)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.49393931205408, -66.84356260635508),
new google.maps.LatLng(10.494096740276287, -66.84328258037567),
new google.maps.LatLng(10.494247068934637, -66.84337913990021),
new google.maps.LatLng(10.494109927003624, -66.8436124920845),
new google.maps.LatLng(10.493933224810574, -66.84356689453125)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);


var R3ECoord = [
new google.maps.LatLng(10.494114620734512, -66.84360461568497),
new google.maps.LatLng(10.49425234362307, -66.84337109327316),
new google.maps.LatLng(10.494444869689561, -66.84345960617065),
new google.maps.LatLng(10.494273442375931, -66.84372514486313),
new google.maps.LatLng(10.494112034754503, -66.84360895513527),
new google.maps.LatLng(10.494270698496457, -66.84372317774933),
new google.maps.LatLng(10.494444663912443, -66.84345992291543),
new google.maps.LatLng(10.494603110202434, -66.84356689453125),
new google.maps.LatLng(10.494431682976497, -66.8438270688057),
new google.maps.LatLng(10.494277644841965, -66.84371860309369)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var R3ECoord = [
new google.maps.LatLng(10.494435334681718, -66.84381881585489),
new google.maps.LatLng(10.494616296908182, -66.84358298778534),
new google.maps.LatLng(10.494732339894561, -66.84372246265411),
new google.maps.LatLng(10.494584648813428, -66.84398531913757),
new google.maps.LatLng(10.494410584234426, -66.84382975101471)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);



var R3ECoord = [
new google.maps.LatLng(10.494584648813428, -66.84397459030151),
new google.maps.LatLng(10.49474288925479, -66.84371173381805),
new google.maps.LatLng(10.494874756227416, -66.84395849704742),
new google.maps.LatLng(10.494748163934775, -66.84404969215393),
new google.maps.LatLng(10.494584648813428, -66.84398531913757)];
    var R3E= new google.maps.Polygon({
      paths: R3ECoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3E'
    });

    polyArray.push(R3E);

var PCoord = [
new google.maps.LatLng(10.490715995774101, -66.84570779350656),
new google.maps.LatLng(10.490942792765779, -66.8457454510683),
new google.maps.LatLng(10.49082377716685, -66.84488117694855),
new google.maps.LatLng(10.490596962969086, -66.84489727020264),
new google.maps.LatLng(10.490639160971948, -66.84511184692383),
new google.maps.LatLng(10.490496742689198, -66.84512794017792),
new google.maps.LatLng(10.49047036892593, -66.84497237205505),
new google.maps.LatLng(10.490254103982403, -66.84501528739929),
new google.maps.LatLng(10.49038656276696, -66.84569940306028),
new google.maps.LatLng(10.49057847014998, -66.84570048782734),
new google.maps.LatLng(10.490565314463138, -66.84560537338257),
new google.maps.LatLng(10.490755205450174, -66.84557855129242),
new google.maps.LatLng(10.490771029693828, -66.84570729732513),
new google.maps.LatLng(10.49095820614753, -66.84574801032005)];
    var P= new google.maps.Polygon({
      paths: PCoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'P'
    });
    polyArray.push(P);

var PCoord = [
new google.maps.LatLng(10.490507292193861, -66.843341588974),
new google.maps.LatLng(10.492211032478984, -66.84316456317902),
new google.maps.LatLng(10.492221581925213, -66.8430894613266),
new google.maps.LatLng(10.490707732714348, -66.84317529201508),
new google.maps.LatLng(10.49047036892593, -66.84308409690857),
new google.maps.LatLng(10.49007476220728, -66.84296071529388),
new google.maps.LatLng(10.489821573641917, -66.84288024902344),
new google.maps.LatLng(10.489515637182388, -66.84277296066284),
new google.maps.LatLng(10.489378493154067, -66.84261202812195),
new google.maps.LatLng(10.489304646344403, -66.8424940109253),
new google.maps.LatLng(10.489262448159547, -66.84211313724518),
new google.maps.LatLng(10.489114754467243, -66.84210777282715),
new google.maps.LatLng(10.489130578794775, -66.84252083301544),
new google.maps.LatLng(10.489304646344403, -66.84263348579407),
new google.maps.LatLng(10.489303749600023, -66.84271554089969),
new google.maps.LatLng(10.489374955197542, -66.84283484772936),
new google.maps.LatLng(10.489585208630517, -66.84291386874315),
new google.maps.LatLng(10.489786617669713, -66.8429646673709),
new google.maps.LatLng(10.490205022949045, -66.84315330183597),
new google.maps.LatLng(10.490462456796521, -66.8431431055069),
new google.maps.LatLng(10.49048897056465, -66.8433227942698)];
    var P= new google.maps.Polygon({
      paths: PCoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'P'
    });
    polyArray.push(P);

var ClinicaCoord = [
      new google.maps.LatLng(13.774066408054827, -68.104248046875),
new google.maps.LatLng(15.390135715305219, -67.752685546875),
new google.maps.LatLng(15.13576435459581, -65.269775390625),
new google.maps.LatLng(13.645986814875332, -65.643310546875),
new google.maps.LatLng(13.004557745339769, -67.093505859375)
    ];
    var Clinica = new google.maps.Polygon({
      paths: ClinicaCoord,
      strokeColor: '#000000',
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.7,
      zonetype: 'R3'
    });
    polyArray.push(Clinica);



  return polyArray;
});
