import * as React from 'react';
import DocumentationComponent from '../../../Components/DocumentationComponent'

const DocumentationPage: React.FC = () => {

  return (
    <div className="sampleformpage">
      <div className="section-title">
        <div className="category">
          DOCUMENTATION
        </div>
        <div className="section-name">
          Dashboard documentation
        </div>
      </div>
      <div className="main">
        <DocumentationComponent />
      </div>
    </div>
  )
}

export default DocumentationPage