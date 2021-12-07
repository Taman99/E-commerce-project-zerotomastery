import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSections } from '../../../Redux/Directory/Directory.selector';
import MenuItem from '../menu-item/MenuItem.component';
import './Directory.styles.scss'



const Directory = ({sections}) => {
  return (
    <div className="directory-menu">
      {
        sections.map(({ id, ...restProps }) => (

          <MenuItem key={id} {...restProps} />
        ))
      }
    </div>
  )
}


const mapStateToProps = createStructuredSelector ({
  sections: selectSections
})

export default connect(mapStateToProps) (Directory);
