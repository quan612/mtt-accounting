import React from "react"
import styled from "styled-components"

import TextBlockImg from "../shared/TextBlockImg"
import Card from "../shared/Card"

import card1Img from "../../images/payroll.jpg"
import card2Img from "../../images/bookkeeping.jpg"
import card3Img from "../../images/accounting.jpg"
import card4Img from "../../images/tax-planning.jpg"
import card5Img from "../../images/tax-return.jpg"
import card6Img from "../../images/hst.jpg"

const Services = () => {
  return (
    <TextBlockImg
      title="What We Do?"
      subtitle="We provide a diversity of services and offer flexible options through digital or mail services."
    >
      <FlexContainer>
        <Card
          img={card1Img}
          alt="Super fast speed increases"
          title="Payroll"
          content="Customizable journal entries, accrual tracking capabilities, and automatic tax filing make payroll easy. From each pay period to year-end, we’ve got your payroll processing covered."
        />
        <Card
          img={card2Img}
          alt="Great savings to be made"
          title="Bookkeeping"
          content="Keeping records of financial transactions and preparing financial statements, such as balance sheets and income statements"
        />
        <Card
          img={card3Img}
          alt="Super fast speed increases"
          title="Accounting"
          content="Perfecting of financial services, preparations of tax returns, track expenses and revenues, producing financial records and provide consulting to a business"
        />
        <Card
          img={card4Img}
          alt="Super fast speed increases"
          title="Tax Planning"
          content="Analysis of a financial situation or plan to ensure that all elements work together to allow you to pay the lowest taxes possible"
        />
        <Card
          img={card5Img}
          alt="Super fast speed increases"
          title="Tax Return"
          content="Variety of tax returns - including but not limited to Personal, Corporate or Trust."
        />
        <Card
          img={card6Img}
          alt="Super fast speed increases"
          title="Remittances"
          content="Remitting GST or HST to allows the business to recover the GST or HST it pays on business expenses."
        />
      </FlexContainer>
    </TextBlockImg>
  )
}

export default Services

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0;
  width: 100%;
`
