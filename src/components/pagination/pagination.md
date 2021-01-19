current	当前页数	
defaultCurrent	默认的当前页数
pageSize	每页条数
total	数据总数

const pageNumber = total / pageSize // 一共有多少页

根据defaultCurrent pageSize total来产生一个动态数组结构，展示在页面上

还需要一个默认最多展示多少条数据  barMaxSize = 5


当defaultCurrent = 1； barMaxSize = 5；
数组为[1, 2, 3, 4, 5]

当defaultCurrent = 5； barMaxSize = 5；
数组为[3, 4, 5, 6, 7]

当defaultCurrent = 11； barMaxSize = 5；
数组为[9, 10, 11, 12, 13]


还要做边界处理，当defaultCurrent = 1； barMaxSize = 5；
数组为[1, 2, 3, 4, 5]

还要做边界处理，当defaultCurrent = 50； barMaxSize = 5；
数组为[46, 47, 48, 49, 50]


