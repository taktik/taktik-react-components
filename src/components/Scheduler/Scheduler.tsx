import styled from '@emotion/styled'
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import {
	Calendar,
	EventProps,
	HeaderProps,
	SlotInfo,
	Views,
	dateFnsLocalizer,
} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { de, enUS, fr, nlBE, Locale } from 'date-fns/locale'
import {
	addDays,
	addMonths,
	addWeeks,
	endOfDay,
	endOfMonth,
	endOfWeek,
	startOfDay,
	startOfMonth,
	subDays,
	subMonths,
	subWeeks
} from 'date-fns'
import format from 'date-fns/format'
import getDay from 'date-fns/getDay'
import parse from 'date-fns/parse'
import {startOfWeek} from 'date-fns/startOfWeek'

const localeByLang: { [key: string]: Locale } = {
	fr: fr,
	de: de,
	nl: nlBE,
	en: enUS,
}

const Container = styled.header`
	display: flex;
    overflow: hidden;
    box-sizing: border-box;
	flex-flow: row nowrap;
	align-items: center;
	width: 100%;
	height: 100px;
`

export const Scheduler = () => {

    const locales = {
        en: enUS,
        fr: fr,
        nl: nlBE,
        de: de,
    }
    
    const localizer = dateFnsLocalizer({
        format,
        parse,
        startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
        getDay,
        locales,
    })

	return (
	    <Container>
            <Calendar
            localizer={localizer}
            culture='fr'
            
            />
        </Container>
	)
}
