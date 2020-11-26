import React from "react"
import perk1Img from "../../images/payroll.jpg"
import perk2Img from "../../images/bookkeeping.jpg"
import perk3Img from "../../images/accounting.jpg"
import perk4Img from "../../images/tax-planning.jpg"
import perk5Img from "../../images/tax-return.jpg"
import perk6Img from "../../images/hst.jpg"

import Perk from "./Perk"

import { FlexContainer } from "./style"

const PerkContainer = () => {
  return (
    <FlexContainer>
      <Perk
        img={perk1Img}
        alt="Super fast speed increases"
        title="Payroll"
        content="Customizable journal entries, accrual tracking capabilities, and automatic tax filing make payroll easy. From each pay period to year-end, we’ve got your payroll processing covered."
      />
      <Perk
        img={perk2Img}
        alt="Great savings to be made"
        title="Bookkeeping"
        content="Keeping records of financial transactions and preparing financial statements, such as balance sheets and income statements"
      />
      <Perk
        img={perk3Img}
        alt="Super fast speed increases"
        title="Accounting"
        content="Perfecting of financial services, preparations of tax returns, track expenses and revenues, producing financial records and provide consulting to a business"
      />
      <Perk
        img={perk4Img}
        alt="Super fast speed increases"
        title="Tax Planning"
        content="Analysis of a financial situation or plan to ensure that all elements work together to allow you to pay the lowest taxes possible"
      />
      <Perk
        img={perk5Img}
        alt="Super fast speed increases"
        title="Tax Return"
        content="Variety of tax returns - including but not limited to Personal, Corporate or Trust."
      />
      <Perk
        img={perk6Img}
        alt="Super fast speed increases"
        title="Remittances"
        content="Remitting GST or HST to allows the business to recover the GST or HST it pays on business expenses."
      />
    </FlexContainer>
  )
}

export default PerkContainer
