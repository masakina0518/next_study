import Link from 'next/link'
import styled from 'styled-components'
import AppLogo from '../../../components/atoms/AppLog'
import Button from '../../../components/atoms/Button'
import {
    SearchIcon,
    PersonIcon,
    ShoppingCartIcon,
} from '../../../components/atoms/IconButton'
import ShapeImage from '../../../components/atoms/ShapeImage'
import Spinner from '../../../components/atoms/Spinner'
import Text from '../../../components/atoms/Text'
import Box from '../../../components/layout/Box'
import Flex from '../../../components/layout/Flex'
import BadgeIconButton from '../../../components/molecules/BadgeIconButton'
import { useAuthContext } from '../../../contexts/AuthContext'
import { useShoppingCartContext } from '../../../contexts/ShoppingCartContext'

const HeaderRoot = styled.header`
    height: 88px;
    padding: ;
    border-bottom: ;
`

