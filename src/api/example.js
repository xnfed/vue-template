import http from '../utils/request'

// 获取请求
export const getBaggageByJourneyId = (journeyId) => {
    return http.get('journey/queryBaggageByJourneyId', {
        params: {
            journeyId
        }
    })
}
