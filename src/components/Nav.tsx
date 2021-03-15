import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from 'components/Icon';

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  background: white;
  > ul {
    display: flex;
    > li {
      width: 33.3333%;
      text-align: center;
        a {
          padding: 2px 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .icon{
            width: 28px;
            height: 28px;
          }
          &.selected{
            color: #02B6FD;
            >.icon{
              fill: #02B6FD;
            }
          }
        }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name='money'/>
            记账页
          </NavLink>
        </li>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name='label'/>
            标签页
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name='statistics'/>
            统计页
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;