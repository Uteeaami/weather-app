import {Link} from "react-router-dom"
import {Card, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from "./Header"

//Maps the pre-defined cities and displays them on main page
const MainView = ({cities}) => {
    return(
      <div>
        <div className="header d-flex justify-content-center">
          <Header></Header>
        </div>
        <div className="d-flex justify-content-center align-items-center flex-wrap" style={{height: '100vh'}}>
          {cities.map(city =>
            <div key={city.id} className="col-lg-2 col-sm-12 text-center">
              <Card style={{ width: '18rem', borderRadius:'18px', borderStyle:'none'}}>
                <Card.Body>
                    <Card.Title style={{fontSize:'30px'}}>{city.name}</Card.Title>
                    <Button variant="primary" as={Link}
                      to={`/${city.name}`}>Show weather
                    </Button>
                </Card.Body>
              </Card>
            </div>
          )}
        </div>
      </div>
    )
  }

  export default MainView