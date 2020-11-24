interface SongInfo {
    name: string;
    singer: string;
    album: string;
    duration: string;
}

interface SongList {
   total: number;
   data: SongInfo[]
}
