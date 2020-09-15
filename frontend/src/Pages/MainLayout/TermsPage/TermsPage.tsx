import * as React from 'react';
import TermsComponent from '../../../Components/TermsComponent'

import { ITermsData } from '../../../Components/TermsComponent/type'
import Widget from '../Widget';

export const termsContent: ITermsData[] = [
  {
    title: 'Terms',
    desc: [
      {
        content: 'By accessing this website, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.'
      }
    ]
  },
  {
    title: 'Use License',

    desc: [
      {
        content: 'Permission is granted to temporarily download one copy of the materials (information or software) on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:',
        subContent: ['modify or copy the materials; use the materials for any commercial purpose, or for any public display (commercial or non-commercial); attempt to decompile or reverse engineer any software contained on this website; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or "mirror" the materials on any other server.                        ']
      },
      {
        content: 'This license shall automatically terminate if you violate any of these restrictions and may be terminated by Dashboard at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.'
      }
    ],
  },
  {
    title: 'Disclaimer',
    desc: [
      {
        content: 'The materials on this website are provided on an as is basis. Dashboard makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.'
      },
      {
        content: 'Further, Dashboard does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.'
      }
    ]
  },
  {
    title: 'Limitations',
    desc: [
      {
        content: 'In no event shall Dashboard or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website, even if Dashboard or a Dashboard authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.'
      }
    ]
  },
  {
    title: 'Accuracy of materials',
    desc: [
      {
        content: 'The materials appearing on this website could include technical, typographical, or photographic errors. Dashboard does not warrant that any of the materials on its website are accurate, complete or current. Dashboard may make changes to the materials contained on its website at any time without notice. However Dashboard does not make any commitment to update the materials.'
      }
    ]
  },
  {
    title: 'Links',
    desc: [
      {
        content: 'Dashboard has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Dashboard of the site. Use of any such linked website is at the users own risk.'
      }
    ]
  },
  {
    title: 'Modifications',
    desc: [
      {
        content: 'Dashboard may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.'
      }
    ]
  },
  {
    title: 'Governing Law',
    desc: [
      {
        content: 'These terms and conditions are governed by and construed in accordance with the laws of Delaware, USA and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.'
      }
    ]
  }
]

const TermsPage = () => {

  return (
    <div className="sampleformpage">
      <div className="section-title">
        <div className="category">
          PAGES
        </div>
        <div className="section-name">
          Terms of service
        </div>
      </div>
      <Widget>
        <TermsComponent termsContent={termsContent} />
      </Widget>
    </div>
  )
}

export default TermsPage;