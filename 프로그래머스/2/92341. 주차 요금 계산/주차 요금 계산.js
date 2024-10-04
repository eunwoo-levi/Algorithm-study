function solution(fees, records) {
    const [basicTime, basicFee, unitTime, unitFee] = fees;
    const parkingTime = {};  // 각 차량의 누적 주차 시간
    const inTime = {};       // 차량 입차 시간 기록

    // 시간 문자열을 분 단위 숫자로 변환
    const timeToMinutes = (time) => {
        const [hh, mm] = time.split(":").map(Number);
        return hh * 60 + mm;
    };

    // 요금을 계산하는 함수
    const calculateFee = (time) => {
        if (time <= basicTime) return basicFee;
        return basicFee + Math.ceil((time - basicTime) / unitTime) * unitFee;
    };

    // 각 기록을 처리
    for (const record of records) {
        const [time, car, type] = record.split(" ");
        const minutes = timeToMinutes(time);

        if (type === "IN") {
            inTime[car] = minutes; // 입차 시간 기록
        } else {
            const parkedTime = minutes - inTime[car]; // 주차 시간 계산
            delete inTime[car]; // 출차 처리 후 입차 기록 제거
            parkingTime[car] = (parkingTime[car] || 0) + parkedTime; // 누적 주차 시간 저장
        }
    }

    // 출차 기록이 없는 차량은 23:59에 출차된 것으로 처리
    for (const car in inTime) {
        const parkedTime = timeToMinutes("23:59") - inTime[car];
        parkingTime[car] = (parkingTime[car] || 0) + parkedTime;
    }

    // 차량 번호별로 정렬하여 요금 계산
    const result = Object.keys(parkingTime)
        .sort((a, b) => a - b) // 차량 번호 오름차순 정렬
        .map(car => calculateFee(parkingTime[car])); // 요금 계산 후 반환

    return result;
}
