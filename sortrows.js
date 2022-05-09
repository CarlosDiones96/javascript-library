/*
 * Sort the rows in  first <tbody> of the specified table according to
 * the value of the nth cell within each row. Use the comparator function
 * if one is specified. Otherwise, compare the values alphabetically.
 */ 
 export function sortrows(table, n, comparator){
     const tbody = table.tBodies[0];
     let rows = tbody.getElementsByTagName('tr');
     rows = Array.prototype.slice.call(rows, 0);

     rows.sort(function(row1, row2){
        let cell1 = row1.getElementsByTagName('td')[n];
        let cell2 = row2.getElementsByTagName('td')[n];
        let val1 = cell1.textContent || cell1.innerText;
        let val2 = cell2.textContent || cell2.innerText;
        
        if(comparator) return comparator(val1, val2);
        if(val1 < val2) return -1;
        else if (val1 > val2) return 1;
        else return 0;
     });

     for(let i = 0; i < rows.length; i++){
         tbody.appendChild(rows[i]);
     }
 }


 /*
  * Sorts the column when clicked
  */
 export function makeSortable(table){
     let headers = table.getElementsByTagName('th');
     for (let i = 0; i < headers.length; i++){
         (function(n) {
            headers[i].onclick = () => sortrows(table, n);
         }(i));
     }
 }