import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { element } from "prop-types"

export default ({ data }) => {
  const records = data.defi.earns
  return (
    <Layout>
      <div>
      
      <table>
          <thead>
            <tr>
              <th>Provider</th>
              <th>Token</th>
              <th>Interest Rate</th>
            </tr>
          </thead>
          <tbody>
            
            {records.map((record)=>(
                <tr>
                    <td>{record.provider.name}</td>
                    <td>{record.token.symbol}</td>
                    <td>{record.interestRate}</td>
                </tr>
            ))}

        </tbody>
        </table>
      
            
      </div>
    </Layout>
  )
}

// We need to apply the a filte here so that we only get tokens of Type $symbol
export const query = graphql`
    query {
        defi {
          earns {
            provider {
              name
            }
            token {
              name
              symbol
            }
            productType {
              name
            }
            interestRate
            minimumTokens
            payoutTimeframe {
              timeframe
            }
            withdrawTimeframe {
              timeframe
            }
            fees
            custody {
              custodyType
            }
          }
        }
      }
      
`

