
        const UCS = {
            "123": [
                { code: "93424", description: "filme stretch pre estirado", quantity: 36, unit: "UN" },
                { code: "58250", description: "óleo liza", quantity: 150, unit: "CX"  }
            ],
            "456": [
                {code: "58250", description: "óleo liza", quantity: 150, unit: "CX"  },
                { code: "58250", description: "óleo liza", quantity: 150, unit: "CX"  },
                {code: "58250", description: "óleo liza", quantity: 150, unit: "CX"  }
            ],
            "789": [
                { code: "58250", description: "óleo liza", quantity: 150, unit: "CX"  }
            ]
        };

        function pesquisarUCS() {
            const codigo = document.getElementById('ucInput').value.trim().toUpperCase();
            const tbody = document.getElementById('tableBody');
            const noResults = document.getElementById('no-results');

            tbody.innerHTML = '';
            noResults.style.display = 'none';



            if (UCS[codigo]) {

                UCS[codigo].forEach(item => {
                    const row = tbody.insertRow();
                    row.insertCell(0).textContent = item.code;
                    row.insertCell(1).textContent = item.description;
                    row.insertCell(2).textContent = item.quantity;
                    row.insertCell(3).textContent = item.unit;

                });
            } else if( codigo === ""){
                
               return;

            } else {
          
                noResults.style.display = 'block';
                
                
            }}