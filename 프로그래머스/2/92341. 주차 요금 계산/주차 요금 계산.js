function solution(fees, records) {
    let res = [];
    const carSet = new Set();
    
    records.forEach(record => {
        carSet.add(record.split(" ")[1]);
    });
    
    const cars = [...carSet].sort((a, b) => a.localeCompare(b));
    
    cars.forEach(car => {
        const filteredCar = records.filter(record => record.split(" ")[1] === car);
        
        if (filteredCar.length % 2 !== 0) {
            filteredCar.push(`23:59 ${car} OUT`);
        }
        
        let sumFee = 0;
        let totalMinutes = 0;
        
        for (let i = 1; i < filteredCar.length; i += 2) {
            const outTime = filteredCar[i].split(" ")[0];
            const inTime = filteredCar[i - 1].split(" ")[0];
            
            const outMinutes = Number(outTime.slice(0, 2)) * 60 + Number(outTime.slice(3, 5));
            const inMinutes = Number(inTime.slice(0, 2)) * 60 + Number(inTime.slice(3, 5));
            
            totalMinutes += (outMinutes - inMinutes);
        }

        if (totalMinutes <= fees[0]) {
            sumFee = fees[1];
        } else {
            sumFee = fees[1] + Math.ceil((totalMinutes - fees[0]) / fees[2]) * fees[3];
        }
        
        res.push(sumFee);
    });

    return res;
}