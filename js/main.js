function init() {
  var tt = Tabletop.init( { key: '0Av_uOo4KAGaQdDFNUUh4bVRUUHctWHgtN3drLV9WREE',
                   callback: displayLeaderboard,
                   simpleSheet: true,
                   parseNumbers: true,
                   orderby: 'total',
                   reverse: true
               });

  window.setInterval(function () { tt.fetch() }, 60000);

};

function displayLeaderboard(data, tabletop) {
	var html1 = [];
  var html2 = [];
	var now = new Date();
  var rank = 1;
  var lastscore = 0;
  for (var i = 0; i < data.length; ++i) {
        var entry = data[i];
        var html;

        if (entry.total < lastscore) {
          rank++;
        }
        
        if (i >= (data.length/2)) {
          html = html2;
        } else {
          html = html1;
        }

        if ((i % 2) == 1) {
          html.push('<tr class="shaded">');
        } else {
          html.push('<tr>');
        }
        html.push('<td>', rank, '</td>', '<td>', entry.teamname, '</td>', '<td>', entry.total, '<td/>', '</tr>');
        lastscore = entry.total;
    }
    document.getElementById("leaderboard1").innerHTML = html1.join("");
    document.getElementById("leaderboard2").innerHTML = html2.join("");
    document.getElementById("updatetime").innerHTML = now.toTimeString();
}

window.onload = init;