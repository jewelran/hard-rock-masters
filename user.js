
        const apiURL = 'https://api.lyrics.ovh';

        const search = document.getElementById('search');
        const result = document.getElementById('result');

        document.getElementById("seachBtn").addEventListener('click', function(){
            const searchInput = document.getElementById("search").value;
            document.getElementById("result").innerText = "";


            fetch(`${apiURL}/suggest/${searchInput}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data.data)
                const lyricsList= document.getElementById('lyricsList');
                lyricsList.innerHTML= '';
                for (let i = 0; i < data.data.length; i++) {
                    const userData = data.data[i];
                   const songTitle = userData.title;
                   const songArtist = userData.artist.name;
                    // console.log(songArtist)
                    console.log(userData)
                   lyricsList.innerHTML += ` <p class="author lead"><strong>${userData.title}</strong> ${userData.type} <span>Washed Out</span> <button onclick="getLyrics('${songTitle}', '${songArtist}')" id="click_lyrics" class="btn btn-success">Get Lyrics</button></p>`
                }
            })
            
        })
        


        function getLyrics(songTitle, songArtist){
            fetch(`https://api.lyrics.ovh/v1/${songArtist}/${songTitle}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                const dataView = data.lyrics;
                // console.log(dataView)
                const detail = document.getElementById("display");
                detail.innerHTML =`
                                    <p>${dataView}</p>
                `
            })
        }

// ------------------------under lyrics-----------------------------------------
document.getElementById('seachBtn').addEventListener('click', function(){
    const searchInput = document.getElementById("search").value;
    fetch(`${apiURL}/suggest/${searchInput}`)
    .then(res =>res.json())
    .then(data => {
   const lyricLst = document.getElementById('lyricsLst');
        for (let i = 0; i < data.data.length; i++) {
            const element = data.data[i];
            const songTitle1 = element.title
            const songId = element.artist.id
            const songArtist1 = element.artist.name
            const songType = element.artist.type
            // console.log(songTitle1, songArtist1)
            const p = document.createElement('p');
            p.innerHTML = `<div class = "containerLyrics" class="single-result  align-items-center my-3 p-3">
                <div class = "title">
                <h2>${songTitle1}</h2><br>              
                <p>${songId}</p> 
                <p>${songArtist1}</p> 
                <p>${songType}</p> 
                </div>
                <div class="titleBtn">
                <button onclick="getLyrics('${songTitle1}', '${songArtist1}')" class="btn1 btn">Get lyrics</button>
                </div>
             
                </div>
            `
            lyricLst.appendChild(p)

        }
    })

})
       
        function getLyrics(songTitle1, songArtist1){
            fetch(`https://api.lyrics.ovh/v1/${songArtist1}/${songTitle1}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                const dataView1 = data.lyrics;
                // console.log(dataView)
                const detail = document.getElementById("displayShow");
                detail.innerHTML =`
                                    <p class ="lyrics">${dataView1}</p>
                `
            })
        }

// ami slice korar jonno onek chesta korchi... kintu slice hocche na keno?
//  jodi solve kore diten valo hoto.
// lyrics display korar jonno , 2ta div niyechi, 1ta holo -- display, 2nd ta holo-- displayShow, kintu 2tar result ekoi div er modde dekhacche. ata keno holo? plz jodi bolten.







           

