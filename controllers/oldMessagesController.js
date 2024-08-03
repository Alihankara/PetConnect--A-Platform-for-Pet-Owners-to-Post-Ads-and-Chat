// import { pool } from '../models/db.js';

// async function oldMessages(req, res) {
//     const sender = req.body.sender;
//     const receiver = req.body.receiver;

//     let response = {};

//     try {
//         const sql1 = 'SELECT id FROM conversations WHERE user1_id = ? AND user2_id = ?';
//         const [result1] = await pool.query(sql1, [sender, receiver]);

//         if (result1.length === 0) {
//             return res.status(401).send('Bu kullanıcı bulunamadı !!!');
//         }

//         const id1 = result1[0].id;
//         const sql2 = 'SELECT message FROM messages WHERE conversation_id = ?';
//         const [result2] = await pool.query(sql2, [id1]);

//         if (result2.length > 0) {
//             response.result2 = result2;
//         }

//         const sql3 = 'SELECT id FROM conversations WHERE user1_id = ? AND user2_id = ?';
//         const [result3] = await pool.query(sql3, [receiver, sender]);

//         if (result3.length === 0) {
//             return res.status(401).send('Bu kullanıcı bulunamadı !!!');
//         }

//         const id2 = result3[0].id;
//         const sql4 = 'SELECT message FROM messages WHERE conversation_id = ?';
//         const [result4] = await pool.query(sql4, [id2]);

//         if (result4.length > 0) {
//             response.result4 = result4;
//         }

//         return res.status(200).json(response);
//     } catch (error) {
//         console.error('Veritabanı hatası:', error);
//         return res.status(500).send({ error: 'Veritabanı hatası: ' + error.message });
//     }
// }

// export { oldMessages };






// import { pool } from '../models/db.js';

// async function oldMessages(req, res) {
//     const sender = req.body.sender;
//     const receiver = req.body.receiver;

//     let response = {};

//     const sql = 'SELECT id FROM conversations WHERE user1_id = ? AND user2_id = ?';

//      pool.query(sql,  [sender, receiver], (err, result) => {
//         if (err) {
//             console.error('Veritabanı hatası:', err);
//             return res.status(500).send({ error: 'Veritabanı hatası: ' + err.message });
//         }

//         if (result.length === 0) {
//             return res.status(401).send('Bu kullanıcı bulunamadı !!!');
//         } else {
//             const id = result[0].id;

//             const sql2 = 'SELECT message FROM messages WHERE conversation_id = ? ';

//             pool.query(sql2, [id], (err2, result2) => {
//                 if (err2) {
//                     console.error('Veritabanı hatası:', err2);
//                     return res.status(500).send({ error: 'Veritabanı hatası: ' + err2.message });
//                 }

//                 if (result2.length > 0) {
//                     response.result2 = result2;
//                     // sendResponse();
//                 }
//             });
//         }
//     });

//     const sql3 = 'SELECT id FROM conversations WHERE user1_id = ? AND user2_id = ?';

//    pool.query(sql3, [receiver, sender], (err3, result3) => {
//         if (err3) {
//             console.error('Veritabanı hatası:', err3);
//             // return res.status(500).send({ error: 'Veritabanı hatası: ' + err3.message });
//         }

//         if (result3.length === 0) {
//             // return res.status(401).send('Bu kullanıcı bulunamadı !!!');
//         } else {
//             const id2 = result3[0].id;

//             const sql4 = 'SELECT message FROM messages WHERE conversation_id = ? ';

//             pool.query(sql4,  [id2], (err4, result4) => {
//                 if (err4) {
//                     console.error('Veritabanı hatası:', err4);
//                     // return res.status(500).send({ error: 'Veritabanı hatası: ' + err4.message });
//                 }

//                 if (result4.length > 0) {
//                     response.result4 = result4;
//                     sendResponse();
//                 }
//             });
//         }
//     });


//     function sendResponse() {
//         if (response.result2 !== undefined && response.result4 !== undefined) {
//             return res.status(200).json(response);
//         }
//     }


// }

// export { oldMessages };





// import { pool } from '../models/db.js';

// function oldMessages(req, res) {
//     const sender = req.body.sender;
//     const receiver = req.body.receiver;

//     let response = {};

//     // İlk sorguyu gerçekleştir
//     pool.query('SELECT id FROM conversations WHERE user1_id = ? AND user2_id = ?', [sender, receiver], (err1, result1) => {
//         if (err1) {
//             console.error('Veritabanı hatası:', err1);
//             return res.status(500).send({ error: 'Veritabanı hatası: ' + err1.message });
//         }

//         if (result1.length === 0) {
//             response.result2 = [];
//         }else{
//             const id1 = result1[0].id;

//         // İkinci sorguyu gerçekleştir
//         pool.query('SELECT message FROM messages WHERE conversation_id = ?', [id1], (err2, result2) => {
//             if (err2) {
//                 console.error('Veritabanı hatası:', err2);
//                 return res.status(500).send({ error: 'Veritabanı hatası: ' + err2.message });
//             }

//             if (result2.length > 0) {
//                 response.result2 = result2;
//                 // response.result2_at = result2.sent_at
//                 // response.result2 = result2.map(row => ({ message2: row.message, sent_at2: row.sent_at }));

//                 // Üçüncü sorguyu gerçekleştir
//                 pool.query('SELECT id FROM conversations WHERE user1_id = ? AND user2_id = ?', [receiver, sender], (err3, result3) => {
//                     if (err3) {
//                         console.error('Veritabanı hatası:', err3);
//                         return res.status(500).send({ error: 'Veritabanı hatası: ' + err3.message });
//                     }

//                     if (result3.length === 0) {
//                         response.result4 = [];
//                     }else{
//                         const id2 = result3[0].id;

//                     // Dördüncü sorguyu gerçekleştir
//                     pool.query('SELECT message FROM messages WHERE conversation_id = ?', [id2], (err4, result4) => {
//                         if (err4) {
//                             console.error('Veritabanı hatası:', err4);
//                             return res.status(500).send({ error: 'Veritabanı hatası: ' + err4.message });
//                         }

//                         if (result4.length > 0) {
//                             response.result4 = result4;
//                             // response.result4_at = result4.sent_at;
//                             // response.result4 = result4.map(row => ({ message4: row.message, sent_at4: row.sent_at }));



//                             // Tüm sorgular başarıyla tamamlandıysa, yanıtı gönder
//                             return res.status(200).json(response);
//                         }
//                     });
//                     }
                    
//                 });
//             }
//         });
//         }
        
//     });
// }

// export { oldMessages };











//     // İlk sorguyu gerçekleştir
// pool.query('SELECT id FROM conversations WHERE user1_id = ? AND user2_id = ?', [sender, receiver], (err1, result1) => {
//     if (err1) {
//         console.error('Veritabanı hatası:', err1);
//         return res.status(500).send({ error: 'Veritabanı hatası: ' + err1.message });
//     }

//     if (result1.length === 0) {
//         response.messages = [];
//     } else {
//         const id1 = result1[0].id;

//         // İkinci sorguyu gerçekleştir
//         pool.query('SELECT message, sent_at FROM messages WHERE conversation_id = ?', [id1], (err2, result2) => {
//             if (err2) {
//                 console.error('Veritabanı hatası:', err2);
//                 return res.status(500).send({ error: 'Veritabanı hatası: ' + err2.message });
//             }

//             // Mesajları birleştirip her birine göndereni belirten bir alan ekle
//             const messages1 = result2.map(row => ({ message: row.message, sent_at: row.sent_at, sender: sender }));

//             // Üçüncü sorguyu gerçekleştir
//             pool.query('SELECT id FROM conversations WHERE user1_id = ? AND user2_id = ?', [receiver, sender], (err3, result3) => {
//                 if (err3) {
//                     console.error('Veritabanı hatası:', err3);
//                     return res.status(500).send({ error: 'Veritabanı hatası: ' + err3.message });
//                 }

//                 if (result3.length === 0) {
//                     response.messages = messages1;
//                     // Tüm sorgular başarıyla tamamlandıysa, yanıtı gönder
//                     return res.status(200).json(response);
//                 } else {
//                     const id2 = result3[0].id;

//                     // Dördüncü sorguyu gerçekleştir
//                     pool.query('SELECT message, sent_at FROM messages WHERE conversation_id = ?', [id2], (err4, result4) => {
//                         if (err4) {
//                             console.error('Veritabanı hatası:', err4);
//                             return res.status(500).send({ error: 'Veritabanı hatası: ' + err4.message });
//                         }

//                         // Mesajları birleştirip her birine göndereni belirten bir alan ekle
//                         const messages2 = result4.map(row => ({ message: row.message, sent_at: row.sent_at, sender: receiver }));

//                         // Tüm mesajları birleştir
//                         const allMessages = [...messages1, ...messages2];

//                         // Tüm mesajları tarihine göre sırala
//                         allMessages.sort((a, b) => new Date(a.sent_at) - new Date(b.sent_at));

//                         // Yanıtı gönder
//                         return res.status(200).json(allMessages);
//                     });
//                 }
//             });
//         });
//     }
// });
















import { pool } from '../models/db.js';

function oldMessages(req, res) {
    const sender = req.body.sender;
    const receiver = req.body.receiver;

    let response = {};


        // İkinci sorguyu gerçekleştir
        pool.query('SELECT message, date, sender FROM messages WHERE sender = ? AND receiver = ?', [sender, receiver], (err, result) => {
            if (err) {
                console.error('Veritabanı hatası:', err);
                return res.status(500).send({ error: 'Veritabanı hatası: ' + err.message });
            }

            if (result.length > 0) {
                response.result = result;

                 }else {
                    // İlk sorgunun sonucu yoksa boş bir dizi ekle
                    response.result = [];
                }
                    // Dördüncü sorguyu gerçekleştir
                    pool.query('SELECT message, date, sender FROM messages WHERE sender = ? AND receiver = ?', [receiver, sender ], (err2, result2) => {
                        if (err2) {
                            console.error('Veritabanı hatası:', err2);
                            return res.status(500).send({ error: 'Veritabanı hatası: ' + err2.message });
                        }

                        if (result2.length > 0) {
                            response.result2 = result2;
                            // Tüm sorgular başarıyla tamamlandıysa, yanıtı gönder
                            
                        }else {
                            // İlk sorgunun sonucu yoksa boş bir dizi ekle
                            response.result2 = [];
                        }
                        console.log('BASARILI')
                        console.log(response)
                        return res.status(200).json(response);
                        
                    });
                  
                    
                });
            
      
        
    
}

export { oldMessages };