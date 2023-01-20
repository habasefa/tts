import { useEffect,useState } from "react"
import { deleteReport, fetchRejectedReport } from "../backend-utils/tutor-utils"
import { getUserById } from "../backend-utils/user-utils"
import Header from '../components/historyComponents/header'
import Footer from '../components/historyComponents/footer'
import { selectUser } from 'redux/userSlice'
import { useSelector } from "react-redux"
import { Card,
  Box,
  Button,
    CardContent,
    CardActions,
    Typography,
Backdrop,
CircularProgress
} from "@mui/material"
import { useRouter } from 'next/router'

const Notification = () => {
  const monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
    const [notify,setNot]= useState([])
    const [isLoading,setisLoading]=useState(true)
    const router = useRouter()
    const user = useSelector(selectUser)
    if (user) {
    
        var token = user.accessToken
        var id = user.user.id
      }

    useEffect( ()=>{
        getUserById(id,token)
        .then((res) => res.json())
        .then((data) =>{ 
        console.log(data)
        fetchRejectedReport( data.tutor.id,token)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            setNot(data.reports)
            setisLoading(false)
        })
        .catch((error)=>{
            setisLoading(false)
        })
        }
        )

        
    }

   ,[] )

    return(
        <>
        <Header />
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
     
      {
        
        notify?.map((report,index)=>{
          return (
            <Box
            maxWidth={253}
            >
            <Card
             
            >
            <CardContent>
              <Typography variant="h5">Rejected Report</Typography>
            </CardContent>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
             Your report in which you submitted in {monthName[report.reportMonth-1]} {report.reportDate} ,  {report.reportYear} is Rejected
        </Typography>
        <CardActions>
            <Button
            variant="contained"
            onClick={()=>{ 
               router.push('/report/'+report.id)
             }}
            >
                Recreate the Report

            </Button>
        </CardActions>
          </Card>
          </Box>
          )

        })

      
     
}
{
notify.length==0 && (
  <Typography
  align="center"
  p={2}
  
  >
    NO NOTIFICATION FOR TODAY
  </Typography>
)
}
        
        </>

    )
}
export default Notification