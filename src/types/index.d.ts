interface SongInfo {
    song: string;
    singer: string;
    album: string;
    duration: string;
    id: string;
}

interface SongList {
   total: number;
   data: SongInfo[]
}
