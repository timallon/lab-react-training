import React from 'react';

function Greetings({lang, children}) {
    let salutation;
        if (lang === "de") {
            salutation = "Hallo"
        } else if (lang === "fr") {
            salutation = "Bonjour"
        }
    return (
        
        <div className='Greeting'>
            {salutation} {children}
        </div>

    );
};

export default Greetings;