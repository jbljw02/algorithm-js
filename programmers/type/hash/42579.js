// level 3 - 베스트 앨범
function solution(genres, plays) {
    // 각 곡의 정보를 담은 배열 생성
    const songs = genres.map((genre, index) => {
        return { num: index, genre: genre, count: plays[index] }
    })

    const genreCountSum = []; // 각 장르의 재생 횟수 합계

    // 각 장르의 재생 횟수 합계 계산
    songs.forEach(song => {
        const thisGenre = genreCountSum.find(item => item.genre === song.genre);
        // 이미 장르가 있는 경우 재생 횟수 누계
        if (thisGenre) {
            thisGenre.count += song.count
        }
        // 장르가 없는 경우 새로 추가
        else {
            genreCountSum.push({ genre: song.genre, count: song.count })
        }
    })

    // 재생 횟수 합계 기준 내림차순 정렬(재생 횟수가 높은 장르 먼저 뽑아야 하기 때문)
    genreCountSum.sort((a, b) => b.count - a.count)

    const answer = [];

    genreCountSum.forEach(genreItem => {
        // 전체 곡 배열에서 현재 장르의 곡들 필터링
        const thisGenreSongs = songs.filter(item => item.genre === genreItem.genre);
        // 재생 횟수 기준 내림차순 정렬(재생 횟수가 높은 곡 먼저 뽑아야 하기 때문)
        thisGenreSongs.sort((a, b) => b.count - a.count);

        // 장르별로 곡을 두개까지 추출
        // 우선 한 개의 곡을 뽑은 뒤, 곡이 두 개까지 있다면 한 개 더 추출
        answer.push(thisGenreSongs[0].num);
        if (thisGenreSongs.length > 1) {
            answer.push(thisGenreSongs[1].num);
        }
    })

    return answer;
}