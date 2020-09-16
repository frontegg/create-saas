import * as React from 'react';
import DocumentationComponent from '../../../Components/DocumentationComponent'
import Widget from '../Widget';

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
      <Widget>
        <DocumentationComponent />
      </Widget>
    </div>
  )
}

export default DocumentationPage