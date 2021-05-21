function checkYuGiOh(n) {
 
    try {
      let check = [...new Array(Number(n))].map((_value, i) => {
       
        i++;
     
        const [_2, _3, _5] = ["yu", "gi", "oh"];
        
        if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0)
          return _2 + "-" + _3 + "-" + _5;
        
        else if (i % 2 === 0 && i % 3 == 0) return _2 + "-" + _3;
        else if (i % 2 === 0 && i % 5 === 0) return _2 + "-" + _5;
        else if (i % 3 === 0 && i% 5 === 0) return _3 + "-" + _5;
       
        else if (i% 2 === 0) return _2;
        else if (i% 3 === 0) return _3;
        else if (i% 5 === 0) return _5;
       
        return i;
      });
      return check;
    } catch (err) {
      return ` invalid parameter :  "${n}" `;
    }
  }

  checkYuGiOh(10) 