import React, { useRef, useEffect } from "react";

export default function Payphone() {
  const payphone = useRef();

  useEffect(() => {
    window.payphone.Button({

        //token obtenido desde la consola de developer
        token: "kDekUuDC2bf8JiGqBC-xKDSDsTzIvOz9g5BtVwvPpKLp3ZwwdGb_kuDmZbyvYNTgd6B1cwB-_8C1uH6lla4rOBGr3A7ZB9g-N3Uqb9ThVu1vURs9jS8U6XAZHInt0Z6VSlxqrHz9snajsx0Qr-V-gI8q797iDihusTZF2xNwdMy4TJCxEZGlkSW9iwgZhepkpZ41aKhkvwHOcdLH9OlYmG276tc2FYA34Y-_8Nlov5R8PCLO03mXiK5FO9RzAW3SlnNa3f7dUnwV2MyowJdevazJCfQkGVGEYenf-E2cglPVTnpqTC7Bygzfnbp8sBXeBnricA",
        
        //PARÁMETROS DE CONFIGURACIÓN
        btnHorizontal: true,
        btnCard: true,
        
        createOrder: function(actions){
        
        //Se ingresan los datos de la transaccion ej. monto, impuestos, etc
        return actions.prepare({
        
        amount: 100,
        amountWithoutTax: 100,
        currency: "USD",
        clientTransactionId: ""
        });
        
        },
        onComplete: function(model, actions){
        
        //Se confirma el pago realizado
        actions.confirm({
        id: model.id,
        clientTxId: model.clientTxId
        }).then(function(value){
        
        //EN ESTA SECCIÓN SE RECIBE LA RESPUESTA Y SE MUESTRA AL USUARIO                                
        
        if (value.transactionStatus === "Approved"){
        alert("Pago " + value.transactionId + " recibido, estado " + value.transactionStatus );
        }
        }).catch(function(err){
        console.log(err);
        });
        
        }
        }).render(payphone);
  }, []);

  return (
    <div>
      <div ref={payphone}></div>
    </div>
  );
}