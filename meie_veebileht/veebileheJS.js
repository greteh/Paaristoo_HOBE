function naita(id1,id2,id3){ // funktsioon naita votab kolm argumenti, milleks on id.
    document.getElementById(id1).style.display='none'   // muudab elemendi id-ga id1 nähtamatuks
    document.getElementById(id2).style.display='block'  // muudab elemendi id-ga id2 nähtavaks
    document.getElementById(id3).style.display='block'  // muudab elemendi id-ga id3 nähtavaks
}
function peida(id1,id2,id3){ // suhteliselt sama mis funktsioon naita
    document.getElementById(id1).style.display='none'
    document.getElementById(id2).style.display='block'
    document.getElementById(id3).style.display='none'
}
