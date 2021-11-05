import React, {useState, useEffect} from 'react';
const {GoogleSpreadsheet} = require('google-spreadsheet');
const creds = require('../client_secret.json');
let doc = {}

const Contact = () => {
    
    const makeInitialCall = async () => {
        doc = new GoogleSpreadsheet('1BkdVCMXb2_E9jtYrhy9vxkfsp__XEBluFUOzM8wTNqQ')
        await doc.useServiceAccountAuth(creds)
        await doc.loadInfo()
        let rows = await doc.sheetsByIndex[0].getRows()
        console.log(rows)
      }
    
      useEffect(()=> {
        makeInitialCall()
      }, [])


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async () => {
        let newRow = {
            Name: name,
            Email: email,
            Message: message

        }

        let sheet = await doc.sheetsByIndex[0];
        sheet.addRow(newRow)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }
    
    return (
        <div className="contact">
            <div><input className='name form' value={name} onChange={handleNameChange} placeHolder="Name" type='text'/></div>
            <div><input className='email form' value={email} onChange={handleEmailChange} placeHolder="Email" type='text'/></div>
            <div><input className='message form' value={message} onChange={handleMessageChange} placeHolder="Message" type='text'/></div>
            <div><input onClick={handleSubmit} type='submit'/></div>

            <div className="copywright">Built with <i class="fas fa-heart"></i> by Shinhee | 2021</div>
        </div>
    )
}

export default Contact;