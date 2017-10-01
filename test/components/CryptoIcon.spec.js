import React from 'react'
import { shallow } from 'enzyme'
import { FaBitcoin } from 'react-icons/lib/fa'
import Isvg from 'react-inlinesvg'
import CryptoIcon from '../../app/components/CryptoIcon'

const defaultProps = {
  currency: 'bch',
  styles: {}
}

describe('component.CryptoIcon', () => {
  describe('currency is "unknown"', () => {
    const props = { ...defaultProps }
    const el = shallow(<CryptoIcon {...props} />)
    it('should show empty span', () => {
      expect(el.html()).toEqual('<span></span>')
    })
  })

  describe('currency is "btc"', () => {
    const props = { ...defaultProps, currency: 'btc' }
    const el = shallow(<CryptoIcon {...props} />)
    it('should show btc symbol', () => {
      expect(el.find(FaBitcoin)).toHaveLength(1)
    })
  })

  describe('currency is "ltc"', () => {
    const props = { ...defaultProps, currency: 'ltc' }
    const el = shallow(<CryptoIcon {...props} />)
    it('should show ltc symbol', () => {
      expect(el.find(Isvg).props().src).toContain('litecoin.svg')
    })
  })
})
