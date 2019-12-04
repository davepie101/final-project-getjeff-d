import React from 'react'
import { BrowserRouter, Route, Link} from 'react-router-dom'
import {Accordion, AccordionItem} from 'react-light-accordion'
import 'react-light-accordion/demo/css/index.css'
import '../App.css'

class FilterOptions extends React.Component {
    render() {
      return (
        <div class="sidenav">
          <Link to="/invalid" class="invalidButton"><h1>Invalid</h1></Link>
          <Accordion atomic={true}>
            <AccordionItem title="State">
              <div>
                test1
              </div>
            </AccordionItem>
            <AccordionItem title="City">
              <div>
                test2
              </div>
            </AccordionItem>
            <AccordionItem title="Zipcode">
              <div>
                test3
              </div>
            </AccordionItem>
          </Accordion>
          <Link to="/upload" class="uploadButton"><h1>Upload</h1></Link>
          <Link to="/heatmap" class="heatmapButton"><h2>Heatmap</h2></Link>

          

        </div>
      );
    }
  }

export default FilterOptions;