import { upgrades } from "./config.js";

export const albums = {
    pack1: {
        name: 'Frutiger music pack 1',
        desc: 'ye',
        img: 'img/cover.jpg',
        tracks: [
            {
                name: 'June 2011 (3DS)',
                artist: 'Nintendo',
                url: 'https://jetta.vgmtreasurechest.com/soundtracks/nintendo-eshop-original-soundtrack-2011-2017/ewujnkop/08.%20June%202011%20%283DS%29.mp3'
            },
            {
                name: 'Zombies on your Lawn (Instrumental)',
                artist: 'Laura Shigihara',
                url: 'music/MPack1/zombos.mp3'
            },
            {
                name: 'Neon Noir',
                artist: 'Sunset Drive',
                url: 'music/MPack1/Neon Noir.mp3'
            },
        ]
    },

    pack2: {
        name: 'Frutiger music pack 2',
        desc: 'ye',
        img: 'img/cover.jpg',
        tracks: [
            {
                name: '12222',
                artist: '123',
                url: 'music/skrill.mp3'
            },
            {
                name: '122233',
                artist: '676767',
                url: 'music/67.mp3'
            }
        ]
    }
};

export function updateAlbumSelect() {
    const selector = document.getElementById("album-sel");
    if (!selector) return;

    const currentAlbumId = selector.value;
    selector.innerHTML = '<option value="">Выберите альбом</option>';

    for (let id in upgrades) {
        const item = upgrades[id];
        if (item.category === 'music' && item.count > 0 && albums[item.album_id]) {
            const album = albums[item.album_id];
            const option = document.createElement("option");
            option.value = item.album_id;
            option.textContent = album.name;
            selector.appendChild(option);
        }
    }

    if (currentAlbumId && selector.querySelector(`option[value="${currentAlbumId}"]`)) {
        selector.value = currentAlbumId;
    }
}


function initPlayer() {
    Amplitude.init({
        songs: [],
        autoplay: false,
        volume: 1
    });

    updateAlbumSelect();
}
// shit!
document.addEventListener('DOMContentLoaded', () => {
    initPlayer();

    const selector = document.getElementById("album-sel");
    if (!selector) {
        console.warn("Элемент #album-sel не найден");
        return;
    }

    selector.addEventListener("change", (e) => {
        const albumId = e.target.value;

        if (!albumId) {
            Amplitude.pause();
            return;
        }

        const album = albums[albumId];
        if (album && Array.isArray(album.tracks) && album.tracks.length > 0) {
            const songs = album.tracks.map(track => ({
                name: track.name || "Без названия",
                artist: track.artist || "Неизвестен",
                url: track.url,
                cover_art_url: track.cover_art_url || album.img || "UpgradesPhotos/ipod.jpg"
            }));

            Amplitude.pause();

            Amplitude.init({
                songs: songs,
                volume: Amplitude.getConfig().volume || 0.7,
                autoplay: true
            });

            Amplitude.bindNewElements();

            console.log(`🎵 Альбом "${album.name}" готов, кнопки активны`);
            localStorage.setItem("lastAlbumId", albumId);
            Amplitude.play()
        } else {
            console.warn(`Альбом ${albumId} пуст`);
            Amplitude.pause();
        }
    });



    const lastAlbumId = localStorage.getItem("lastAlbumId");
    if (lastAlbumId && albums[lastAlbumId]) {
        selector.value = lastAlbumId;
        selector.dispatchEvent(new Event("change"));
    }
});
