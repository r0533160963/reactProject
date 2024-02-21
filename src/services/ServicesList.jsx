import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import DataStore from '../data/DataStore';
import { observer } from 'mobx-react'

const ServicesList = observer(() => {
    return (<>
        <h1 >Our services</h1>
        {DataStore.services.map((service) => {
            <Service service={service} />
        })}
    </>)
})
export default ServicesList;







//המפ יעבור על מערך השרותים מהסטור וכל שרות נכתוב את שם הפונקציה שרות ונשלח את השרות הספציפי