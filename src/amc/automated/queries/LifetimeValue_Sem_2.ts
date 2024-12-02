import { IYearMapItem } from 'src/utils/interfaces';

export const LTV_Sem_2 = (dates_map: Map<string, IYearMapItem>) => {
  return `WITH ntb_data AS (
    SELECT
    advertiser,
    campaign,
    COUNT(DISTINCT user_id) AS total_ntb_users,
    COUNT(DISTINCT conversion_event_dt) AS total_ntb_conversions,
    SUM(month_1) AS month_1_ntb_conv,
    SUM(month_1_ntb_sales) AS month_1_ntb_sales,
    SUM(month_2) AS month_2_ntb_conv,
    SUM(month_2_ntb_sales) AS month_2_ntb_sales,
    SUM(month_3) AS month_3_ntb_conv,
    SUM(month_3_ntb_sales) AS month_3_ntb_sales,
    SUM(month_4) AS month_4_ntb_conv,
    SUM(month_4_ntb_sales) AS month_4_ntb_sales,
    SUM(month_5) AS month_5_ntb_conv,
    SUM(month_5_ntb_sales) AS month_5_ntb_sales,
    SUM(month_6) AS month_6_ntb_conv,
    SUM(month_6_ntb_sales) AS month_6_ntb_sales,
    SUM(month_7) AS month_7_ntb_conv,
    SUM(month_7_ntb_sales) AS month_7_ntb_sales,
    SUM(month_8) AS month_8_ntb_conv,
    SUM(month_8_ntb_sales) AS month_8_ntb_sales,
    SUM(month_9) AS month_9_ntb_conv,
    SUM(month_9_ntb_sales) AS month_9_ntb_sales,
    SUM(month_10) AS month_10_ntb_conv,
    SUM(month_10_ntb_sales) AS month_10_ntb_sales,
    SUM(month_11) AS month_11_ntb_conv,
    SUM(month_11_ntb_sales) AS month_11_ntb_sales,
    SUM(month_12) AS month_12_ntb_conv,
    SUM(month_12_ntb_sales) AS month_12_ntb_sales
    FROM (
    SELECT
    advertiser,
    campaign,
    MAX(conversion_event_dt) AS conversion_event_dt,
    new_to_brand_total_product_sales,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_1').date}-01', 1, 0) AS month_1,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_1').date}-01', new_to_brand_total_product_sales, 0) AS month_1_ntb_sales,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_2').date}-01', 1, 0) AS month_2,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_2').date}-01', new_to_brand_total_product_sales, 0) AS month_2_ntb_sales,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_3').date}-01', 1, 0) AS month_3,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_3').date}-01', new_to_brand_total_product_sales, 0) AS month_3_ntb_sales,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_4').date}-01', 1, 0) AS month_4,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_4').date}-01', new_to_brand_total_product_sales, 0) AS month_4_ntb_sales,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_5').date}-01', 1, 0) AS month_5,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_5').date}-01', new_to_brand_total_product_sales, 0) AS month_5_ntb_sales,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_6').date}-01', 1, 0) AS month_6,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_6').date}-01', new_to_brand_total_product_sales, 0) AS month_6_ntb_sales,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_7').date}-01', 1, 0) AS month_7,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_7').date}-01', new_to_brand_total_product_sales, 0) AS month_7_ntb_sales,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_8').date}-01', 1, 0) AS month_8,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_8').date}-01', new_to_brand_total_product_sales, 0) AS month_8_ntb_sales,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_9').date}-01', 1, 0) AS month_9,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_9').date}-01', new_to_brand_total_product_sales, 0) AS month_9_ntb_sales,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_10').date}-01', 1, 0) AS month_10,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_10').date}-01', new_to_brand_total_product_sales, 0) AS month_10_ntb_sales,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_11').date}-01', 1, 0) AS month_11,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_11').date}-01', new_to_brand_total_product_sales, 0) AS month_11_ntb_sales,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_12').date}-01', 1, 0) AS month_12,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_12').date}-01', new_to_brand_total_product_sales, 0) AS month_12_ntb_sales,
    user_id
    FROM
    amazon_attributed_events_by_conversion_time
    WHERE
    purchases > 0
    AND new_to_brand = TRUE
    GROUP BY
    advertiser,
    campaign,
    user_id,
    new_to_brand_total_product_sales
    )
    GROUP BY
    advertiser,
    campaign
    ),
    ntb_users AS (
    SELECT
    campaign,
    user_id,
    MAX(conversion_event_dt) AS conversion_event_dt
    FROM
    amazon_attributed_events_by_conversion_time
    WHERE
    purchases > 0
    AND new_to_brand = TRUE
    GROUP BY
    campaign,
    user_id
    ),
    non_ntb_rest_months AS(
    SELECT 
    campaign,
    MAX(conversion_event_dt) AS conversion_event_dt,
    total_product_sales,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_2').date}-01',1,0) AS month_2,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_2').date}-01',total_product_sales,0) AS month_2_sales,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_3').date}-01',1,0) AS month_3,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_3').date}-01',total_product_sales,0) AS month_3_sales,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_4').date}-01',1,0) AS month_4,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_4').date}-01',total_product_sales,0) AS month_4_sales,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_5').date}-01',1,0) AS month_5,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_5').date}-01',total_product_sales,0) AS month_5_sales,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_6').date}-01',1,0) AS month_6,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_6').date}-01',total_product_sales,0) AS month_6_sales,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_7').date}-01',1,0) AS month_7,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_7').date}-01',total_product_sales,0) AS month_7_sales,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_8').date}-01',1,0) AS month_8,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_8').date}-01',total_product_sales,0) AS month_8_sales,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_9').date}-01',1,0) AS month_9,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_9').date}-01',total_product_sales,0) AS month_9_sales,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_10').date}-01',1,0) AS month_10,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_10').date}-01',total_product_sales,0) AS month_10_sales,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_11').date}-01',1,0) AS month_11,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_11').date}-01',total_product_sales,0) AS month_11_sales,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_12').date}-01',1,0) AS month_12,
    IF(DATE_TRUNC('month', MAX(conversion_event_dt)) SIMILAR TO '^${dates_map.get('month_12').date}-01',total_product_sales,0) AS month_12_sales,
    user_id
    FROM 
    amazon_attributed_events_by_conversion_time
    WHERE
    purchases > 0
    AND new_to_brand = FALSE
    GROUP BY
    campaign,
    user_id,
    total_product_sales
    ),
    month_6_recurr AS (
    SELECT 
    ntb.campaign,
    SUM(month_7) AS month_6_users_recurr_month_7,
    SUM(month_7_sales) AS month_6_recurr_month_7_sales,
    SUM(month_8) AS month_6_users_recurr_month_8,
    SUM(month_8_sales) AS month_6_recurr_month_8_sales,
    SUM(month_9) AS month_6_users_recurr_month_9,
    SUM(month_9_sales) AS month_6_recurr_month_9_sales,
    SUM(month_10) AS month_6_users_recurr_month_10,
    SUM(month_10_sales) AS month_6_recurr_month_10_sales,
    SUM(month_11) AS month_6_users_recurr_month_11,
    SUM(month_11_sales) AS month_6_recurr_month_11_sales,
    SUM(month_12) AS month_6_users_recurr_month_12,
    SUM(month_12_sales) AS month_6_recurr_month_12_sales,
    COUNT(DISTINCT(ntb.user_id)) month_6_total_return_users
    FROM ntb_users ntb
    JOIN non_ntb_rest_months non
    ON ntb.user_id = non.user_id
    AND DATE_TRUNC('month', ntb.conversion_event_dt) SIMILAR TO '^${dates_map.get('month_6').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_1').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_2').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_3').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_4').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_5').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_6').date}-01'
    GROUP BY
    campaign
    HAVING COUNT(DISTINCT(non.user_id))>1
    ),
    month_6_data AS (
    SELECT 
    prev_data.advertiser,
    prev_data.campaign,
    prev_data.total_ntb_users,
    prev_data.total_ntb_conversions,
    prev_data.month_6_ntb_conv,
    prev_data.month_6_ntb_sales,
    recur.month_6_users_recurr_month_7,
    recur.month_6_recurr_month_7_sales,
    recur.month_6_users_recurr_month_8,
    recur.month_6_recurr_month_8_sales,
    recur.month_6_users_recurr_month_9,
    recur.month_6_recurr_month_9_sales,
    recur.month_6_users_recurr_month_10,
    recur.month_6_recurr_month_10_sales,
    recur.month_6_users_recurr_month_11,
    recur.month_6_recurr_month_11_sales,
    recur.month_6_users_recurr_month_12,
    recur.month_6_recurr_month_12_sales,
    recur.month_6_total_return_users,
    prev_data.month_7_ntb_conv,
    prev_data.month_7_ntb_sales,
    prev_data.month_8_ntb_conv,
    prev_data.month_8_ntb_sales,
    prev_data.month_9_ntb_conv,
    prev_data.month_9_ntb_sales,
    prev_data.month_10_ntb_conv,
    prev_data.month_10_ntb_sales,
    prev_data.month_11_ntb_conv,
    prev_data.month_11_ntb_sales,
    prev_data.month_12_ntb_conv,
    prev_data.month_12_ntb_sales
    FROM
    ntb_data prev_data
    LEFT JOIN
    month_6_recurr recur
    ON prev_data.campaign = recur.campaign
    GROUP BY
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31
    ),
    month_7_recurr AS (
    SELECT 
    ntb.campaign,
    SUM(month_8) AS month_7_users_recurr_month_8,
    SUM(month_8_sales) AS month_7_recurr_month_8_sales,
    SUM(month_9) AS month_7_users_recurr_month_9,
    SUM(month_9_sales) AS month_7_recurr_month_9_sales,
    SUM(month_10) AS month_7_users_recurr_month_10,
    SUM(month_10_sales) AS month_7_recurr_month_10_sales,
    SUM(month_11) AS month_7_users_recurr_month_11,
    SUM(month_11_sales) AS month_7_recurr_month_11_sales,
    SUM(month_12) AS month_7_users_recurr_month_12,
    SUM(month_12_sales) AS month_7_recurr_month_12_sales,
    COUNT(DISTINCT(ntb.user_id)) month_7_total_return_users
    FROM ntb_users ntb
    JOIN non_ntb_rest_months non
    ON ntb.user_id = non.user_id
    AND DATE_TRUNC('month', ntb.conversion_event_dt) SIMILAR TO '^${dates_map.get('month_7').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_1').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_2').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_3').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_4').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_5').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_6').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_7').date}-01'
    GROUP BY
    campaign
    HAVING COUNT(DISTINCT(non.user_id))>1
    ),
    month_7_data AS (
    SELECT 
    prev_data.advertiser,
    prev_data.campaign,
    prev_data.total_ntb_users,
    prev_data.total_ntb_conversions,
    prev_data.month_6_ntb_conv,
    prev_data.month_6_ntb_sales,
    prev_data.month_6_users_recurr_month_7,
    prev_data.month_6_recurr_month_7_sales,
    prev_data.month_6_users_recurr_month_8,
    prev_data.month_6_recurr_month_8_sales,
    prev_data.month_6_users_recurr_month_9,
    prev_data.month_6_recurr_month_9_sales,
    prev_data.month_6_users_recurr_month_10,
    prev_data.month_6_recurr_month_10_sales,
    prev_data.month_6_users_recurr_month_11,
    prev_data.month_6_recurr_month_11_sales,
    prev_data.month_6_users_recurr_month_12,
    prev_data.month_6_recurr_month_12_sales,
    prev_data.month_6_total_return_users,
    prev_data.month_7_ntb_conv,
    prev_data.month_7_ntb_sales,
    recur.month_7_users_recurr_month_8,
    recur.month_7_recurr_month_8_sales,
    recur.month_7_users_recurr_month_9,
    recur.month_7_recurr_month_9_sales,
    recur.month_7_users_recurr_month_10,
    recur.month_7_recurr_month_10_sales,
    recur.month_7_users_recurr_month_11,
    recur.month_7_recurr_month_11_sales,
    recur.month_7_users_recurr_month_12,
    recur.month_7_recurr_month_12_sales,
    recur.month_7_total_return_users,
    prev_data.month_8_ntb_conv,
    prev_data.month_8_ntb_sales,
    prev_data.month_9_ntb_conv,
    prev_data.month_9_ntb_sales,
    prev_data.month_10_ntb_conv,
    prev_data.month_10_ntb_sales,
    prev_data.month_11_ntb_conv,
    prev_data.month_11_ntb_sales,
    prev_data.month_12_ntb_conv,
    prev_data.month_12_ntb_sales
    FROM
    month_6_data prev_data
    LEFT JOIN
    month_7_recurr recur
    ON prev_data.campaign = recur.campaign
    GROUP BY
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42
    ),
    month_8_recurr AS (
    SELECT 
    ntb.campaign,
    SUM(month_9) AS month_8_users_recurr_month_9,
    SUM(month_9_sales) AS month_8_recurr_month_9_sales,
    SUM(month_10) AS month_8_users_recurr_month_10,
    SUM(month_10_sales) AS month_8_recurr_month_10_sales,
    SUM(month_11) AS month_8_users_recurr_month_11,
    SUM(month_11_sales) AS month_8_recurr_month_11_sales,
    SUM(month_12) AS month_8_users_recurr_month_12,
    SUM(month_12_sales) AS month_8_recurr_month_12_sales,
    COUNT(DISTINCT(ntb.user_id)) month_8_total_return_users
    FROM ntb_users ntb
    JOIN non_ntb_rest_months non
    ON ntb.user_id = non.user_id
    AND DATE_TRUNC('month', ntb.conversion_event_dt) SIMILAR TO '^${dates_map.get('month_8').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_1').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_2').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_3').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_4').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_5').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_6').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_7').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_8').date}-01'
    GROUP BY
    campaign
    HAVING COUNT(DISTINCT(non.user_id))>1
    ),
    month_8_data AS (
    SELECT 
    prev_data.advertiser,
    prev_data.campaign,
    prev_data.total_ntb_users,
    prev_data.total_ntb_conversions,
    prev_data.month_6_ntb_conv,
    prev_data.month_6_ntb_sales,
    prev_data.month_6_users_recurr_month_7,
    prev_data.month_6_recurr_month_7_sales,
    prev_data.month_6_users_recurr_month_8,
    prev_data.month_6_recurr_month_8_sales,
    prev_data.month_6_users_recurr_month_9,
    prev_data.month_6_recurr_month_9_sales,
    prev_data.month_6_users_recurr_month_10,
    prev_data.month_6_recurr_month_10_sales,
    prev_data.month_6_users_recurr_month_11,
    prev_data.month_6_recurr_month_11_sales,
    prev_data.month_6_users_recurr_month_12,
    prev_data.month_6_recurr_month_12_sales,
    prev_data.month_6_total_return_users,
    prev_data.month_7_ntb_conv,
    prev_data.month_7_ntb_sales,
    prev_data.month_7_users_recurr_month_8,
    prev_data.month_7_recurr_month_8_sales,
    prev_data.month_7_users_recurr_month_9,
    prev_data.month_7_recurr_month_9_sales,
    prev_data.month_7_users_recurr_month_10,
    prev_data.month_7_recurr_month_10_sales,
    prev_data.month_7_users_recurr_month_11,
    prev_data.month_7_recurr_month_11_sales,
    prev_data.month_7_users_recurr_month_12,
    prev_data.month_7_recurr_month_12_sales,
    prev_data.month_7_total_return_users,
    prev_data.month_8_ntb_conv,
    prev_data.month_8_ntb_sales,
    recur.month_8_users_recurr_month_9,
    recur.month_8_recurr_month_9_sales,
    recur.month_8_users_recurr_month_10,
    recur.month_8_recurr_month_10_sales,
    recur.month_8_users_recurr_month_11,
    recur.month_8_recurr_month_11_sales,
    recur.month_8_users_recurr_month_12,
    recur.month_8_recurr_month_12_sales,
    recur.month_8_total_return_users,
    prev_data.month_9_ntb_conv,
    prev_data.month_9_ntb_sales,
    prev_data.month_10_ntb_conv,
    prev_data.month_10_ntb_sales,
    prev_data.month_11_ntb_conv,
    prev_data.month_11_ntb_sales,
    prev_data.month_12_ntb_conv,
    prev_data.month_12_ntb_sales
    FROM
    month_7_data prev_data
    LEFT JOIN
    month_8_recurr recur
    ON prev_data.campaign = recur.campaign
    GROUP BY
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51
    ),
    month_9_recurr AS (
    SELECT 
    ntb.campaign,
    SUM(month_10) AS month_9_users_recurr_month_10,
    SUM(month_10_sales) AS month_9_recurr_month_10_sales,
    SUM(month_11) AS month_9_users_recurr_month_11,
    SUM(month_11_sales) AS month_9_recurr_month_11_sales,
    SUM(month_12) AS month_9_users_recurr_month_12,
    SUM(month_12_sales) AS month_9_recurr_month_12_sales,
    COUNT(DISTINCT(ntb.user_id)) month_9_total_return_users
    FROM ntb_users ntb
    JOIN non_ntb_rest_months non
    ON ntb.user_id = non.user_id
    AND DATE_TRUNC('month', ntb.conversion_event_dt) SIMILAR TO '^${dates_map.get('month_9').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_1').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_2').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_3').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_4').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_5').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_6').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_7').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_8').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_9').date}-01'
    GROUP BY
    campaign
    HAVING COUNT(DISTINCT(non.user_id))>1
    ),
    month_9_data AS (
    SELECT 
    prev_data.advertiser,
    prev_data.campaign,
    prev_data.total_ntb_users,
    prev_data.total_ntb_conversions,
    prev_data.month_6_ntb_conv,
    prev_data.month_6_ntb_sales,
    prev_data.month_6_users_recurr_month_7,
    prev_data.month_6_recurr_month_7_sales,
    prev_data.month_6_users_recurr_month_8,
    prev_data.month_6_recurr_month_8_sales,
    prev_data.month_6_users_recurr_month_9,
    prev_data.month_6_recurr_month_9_sales,
    prev_data.month_6_users_recurr_month_10,
    prev_data.month_6_recurr_month_10_sales,
    prev_data.month_6_users_recurr_month_11,
    prev_data.month_6_recurr_month_11_sales,
    prev_data.month_6_users_recurr_month_12,
    prev_data.month_6_recurr_month_12_sales,
    prev_data.month_6_total_return_users,
    prev_data.month_7_ntb_conv,
    prev_data.month_7_ntb_sales,
    prev_data.month_7_users_recurr_month_8,
    prev_data.month_7_recurr_month_8_sales,
    prev_data.month_7_users_recurr_month_9,
    prev_data.month_7_recurr_month_9_sales,
    prev_data.month_7_users_recurr_month_10,
    prev_data.month_7_recurr_month_10_sales,
    prev_data.month_7_users_recurr_month_11,
    prev_data.month_7_recurr_month_11_sales,
    prev_data.month_7_users_recurr_month_12,
    prev_data.month_7_recurr_month_12_sales,
    prev_data.month_7_total_return_users,
    prev_data.month_8_ntb_conv,
    prev_data.month_8_ntb_sales,
    prev_data.month_8_users_recurr_month_9,
    prev_data.month_8_recurr_month_9_sales,
    prev_data.month_8_users_recurr_month_10,
    prev_data.month_8_recurr_month_10_sales,
    prev_data.month_8_users_recurr_month_11,
    prev_data.month_8_recurr_month_11_sales,
    prev_data.month_8_users_recurr_month_12,
    prev_data.month_8_recurr_month_12_sales,
    prev_data.month_8_total_return_users,
    prev_data.month_9_ntb_conv,
    prev_data.month_9_ntb_sales,
    recur.month_9_users_recurr_month_10,
    recur.month_9_recurr_month_10_sales,
    recur.month_9_users_recurr_month_11,
    recur.month_9_recurr_month_11_sales,
    recur.month_9_users_recurr_month_12,
    recur.month_9_recurr_month_12_sales,
    recur.month_9_total_return_users,
    prev_data.month_10_ntb_conv,
    prev_data.month_10_ntb_sales,
    prev_data.month_11_ntb_conv,
    prev_data.month_11_ntb_sales,
    prev_data.month_12_ntb_conv,
    prev_data.month_12_ntb_sales
    FROM
    month_8_data prev_data
    LEFT JOIN
    month_9_recurr recur
    ON prev_data.campaign = recur.campaign
    GROUP BY
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58
    ),
    month_10_recurr AS (
    SELECT 
    ntb.campaign,
    SUM(month_11) AS month_10_users_recurr_month_11,
    SUM(month_11_sales) AS month_10_recurr_month_11_sales,
    SUM(month_12) AS month_10_users_recurr_month_12,
    SUM(month_12_sales) AS month_10_recurr_month_12_sales,
    COUNT(DISTINCT(ntb.user_id)) month_10_total_return_users
    FROM ntb_users ntb
    JOIN non_ntb_rest_months non
    ON ntb.user_id = non.user_id
    AND DATE_TRUNC('month', ntb.conversion_event_dt) SIMILAR TO '^${dates_map.get('month_10').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_1').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_2').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_3').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_4').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_5').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_6').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_7').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_8').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_9').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_10').date}-01'
    GROUP BY
    campaign
    HAVING COUNT(DISTINCT(non.user_id))>1
    ),
    month_10_data AS (
    SELECT 
    prev_data.advertiser,
    prev_data.campaign,
    prev_data.total_ntb_users,
    prev_data.total_ntb_conversions,
    prev_data.month_6_ntb_conv,
    prev_data.month_6_ntb_sales,
    prev_data.month_6_users_recurr_month_7,
    prev_data.month_6_recurr_month_7_sales,
    prev_data.month_6_users_recurr_month_8,
    prev_data.month_6_recurr_month_8_sales,
    prev_data.month_6_users_recurr_month_9,
    prev_data.month_6_recurr_month_9_sales,
    prev_data.month_6_users_recurr_month_10,
    prev_data.month_6_recurr_month_10_sales,
    prev_data.month_6_users_recurr_month_11,
    prev_data.month_6_recurr_month_11_sales,
    prev_data.month_6_users_recurr_month_12,
    prev_data.month_6_recurr_month_12_sales,
    prev_data.month_6_total_return_users,
    prev_data.month_7_ntb_conv,
    prev_data.month_7_ntb_sales,
    prev_data.month_7_users_recurr_month_8,
    prev_data.month_7_recurr_month_8_sales,
    prev_data.month_7_users_recurr_month_9,
    prev_data.month_7_recurr_month_9_sales,
    prev_data.month_7_users_recurr_month_10,
    prev_data.month_7_recurr_month_10_sales,
    prev_data.month_7_users_recurr_month_11,
    prev_data.month_7_recurr_month_11_sales,
    prev_data.month_7_users_recurr_month_12,
    prev_data.month_7_recurr_month_12_sales,
    prev_data.month_7_total_return_users,
    prev_data.month_8_ntb_conv,
    prev_data.month_8_ntb_sales,
    prev_data.month_8_users_recurr_month_9,
    prev_data.month_8_recurr_month_9_sales,
    prev_data.month_8_users_recurr_month_10,
    prev_data.month_8_recurr_month_10_sales,
    prev_data.month_8_users_recurr_month_11,
    prev_data.month_8_recurr_month_11_sales,
    prev_data.month_8_users_recurr_month_12,
    prev_data.month_8_recurr_month_12_sales,
    prev_data.month_8_total_return_users,
    prev_data.month_9_ntb_conv,
    prev_data.month_9_ntb_sales,
    prev_data.month_9_users_recurr_month_10,
    prev_data.month_9_recurr_month_10_sales,
    prev_data.month_9_users_recurr_month_11,
    prev_data.month_9_recurr_month_11_sales,
    prev_data.month_9_users_recurr_month_12,
    prev_data.month_9_recurr_month_12_sales,
    prev_data.month_9_total_return_users,
    prev_data.month_10_ntb_conv,
    prev_data.month_10_ntb_sales,
    recur.month_10_users_recurr_month_11,
    recur.month_10_recurr_month_11_sales,
    recur.month_10_users_recurr_month_12,
    recur.month_10_recurr_month_12_sales,
    recur.month_10_total_return_users,
    prev_data.month_11_ntb_conv,
    prev_data.month_11_ntb_sales,
    prev_data.month_12_ntb_conv,
    prev_data.month_12_ntb_sales
    FROM
    month_9_data prev_data
    LEFT JOIN
    month_10_recurr recur
    ON prev_data.campaign = recur.campaign
    GROUP BY
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63
    ),
    month_11_recurr AS (
    SELECT 
    ntb.campaign,
    SUM(month_12) AS month_11_users_recurr_month_12,
    SUM(month_12_sales) AS month_11_recurr_month_12_sales,
    COUNT(DISTINCT(ntb.user_id)) month_11_total_return_users
    FROM ntb_users ntb
    JOIN non_ntb_rest_months non
    ON ntb.user_id = non.user_id
    AND DATE_TRUNC('month', ntb.conversion_event_dt) SIMILAR TO '^${dates_map.get('month_11').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_1').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_2').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_3').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_4').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_5').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_6').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_7').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_8').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_9').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_10').date}-01'
    AND DATE_TRUNC('month', non.conversion_event_dt) NOT SIMILAR TO '^${dates_map.get('month_11').date}-01'
    GROUP BY
    campaign
    HAVING COUNT(DISTINCT(non.user_id))>1
    ),
    preliminar_data AS (
    SELECT 
    prev_data.advertiser,
    prev_data.campaign,
    prev_data.total_ntb_users,
    prev_data.total_ntb_conversions,
    prev_data.month_6_ntb_conv,
    prev_data.month_6_ntb_sales,
    IF(prev_data.month_6_ntb_conv>0, prev_data.month_6_users_recurr_month_7, 0) AS month_6_users_recurr_month_7,
    IF(prev_data.month_6_ntb_conv>0, prev_data.month_6_recurr_month_7_sales, 0) AS month_6_recurr_month_7_sales,
    IF(prev_data.month_6_ntb_conv>0, prev_data.month_6_users_recurr_month_8, 0) AS month_6_users_recurr_month_8,
    IF(prev_data.month_6_ntb_conv>0, prev_data.month_6_recurr_month_8_sales, 0) AS month_6_recurr_month_8_sales,
    IF(prev_data.month_6_ntb_conv>0, prev_data.month_6_users_recurr_month_9, 0) AS month_6_users_recurr_month_9,
    IF(prev_data.month_6_ntb_conv>0, prev_data.month_6_recurr_month_9_sales, 0) AS month_6_recurr_month_9_sales,
    IF(prev_data.month_6_ntb_conv>0, prev_data.month_6_users_recurr_month_10, 0) AS month_6_users_recurr_month_10,
    IF(prev_data.month_6_ntb_conv>0, prev_data.month_6_recurr_month_10_sales, 0) AS month_6_recurr_month_10_sales,
    IF(prev_data.month_6_ntb_conv>0, prev_data.month_6_users_recurr_month_11, 0) AS month_6_users_recurr_month_11,
    IF(prev_data.month_6_ntb_conv>0, prev_data.month_6_recurr_month_11_sales, 0) AS month_6_recurr_month_11_sales,
    IF(prev_data.month_6_ntb_conv>0, prev_data.month_6_users_recurr_month_12, 0) AS month_6_users_recurr_month_12,
    IF(prev_data.month_6_ntb_conv>0, prev_data.month_6_recurr_month_12_sales, 0) AS month_6_recurr_month_12_sales,
    IF(prev_data.month_6_ntb_conv>0, prev_data.month_6_total_return_users, 0) AS month_6_total_return_users,
    prev_data.month_7_ntb_conv,
    prev_data.month_7_ntb_sales,
    IF(prev_data.month_7_ntb_conv>0, prev_data.month_7_users_recurr_month_8, 0) AS month_7_users_recurr_month_8,
    IF(prev_data.month_7_ntb_conv>0, prev_data.month_7_recurr_month_8_sales, 0) AS month_7_recurr_month_8_sales,
    IF(prev_data.month_7_ntb_conv>0, prev_data.month_7_users_recurr_month_9, 0) AS month_7_users_recurr_month_9,
    IF(prev_data.month_7_ntb_conv>0, prev_data.month_7_recurr_month_9_sales, 0) AS month_7_recurr_month_9_sales,
    IF(prev_data.month_7_ntb_conv>0, prev_data.month_7_users_recurr_month_10, 0) AS month_7_users_recurr_month_10,
    IF(prev_data.month_7_ntb_conv>0, prev_data.month_7_recurr_month_10_sales, 0) AS month_7_recurr_month_10_sales,
    IF(prev_data.month_7_ntb_conv>0, prev_data.month_7_users_recurr_month_11, 0) AS month_7_users_recurr_month_11,
    IF(prev_data.month_7_ntb_conv>0, prev_data.month_7_recurr_month_11_sales, 0) AS month_7_recurr_month_11_sales,
    IF(prev_data.month_7_ntb_conv>0, prev_data.month_7_users_recurr_month_12, 0) AS month_7_users_recurr_month_12,
    IF(prev_data.month_7_ntb_conv>0, prev_data.month_7_recurr_month_12_sales, 0) AS month_7_recurr_month_12_sales,
    IF(prev_data.month_7_ntb_conv>0, prev_data.month_7_total_return_users, 0) AS month_7_total_return_users,
    prev_data.month_8_ntb_conv,
    prev_data.month_8_ntb_sales,
    IF(prev_data.month_8_ntb_conv>0, prev_data.month_8_users_recurr_month_9, 0) AS month_8_users_recurr_month_9,
    IF(prev_data.month_8_ntb_conv>0, prev_data.month_8_recurr_month_9_sales, 0) AS month_8_recurr_month_9_sales,
    IF(prev_data.month_8_ntb_conv>0, prev_data.month_8_users_recurr_month_10, 0) AS month_8_users_recurr_month_10,
    IF(prev_data.month_8_ntb_conv>0, prev_data.month_8_recurr_month_10_sales, 0) AS month_8_recurr_month_10_sales,
    IF(prev_data.month_8_ntb_conv>0, prev_data.month_8_users_recurr_month_11, 0) AS month_8_users_recurr_month_11,
    IF(prev_data.month_8_ntb_conv>0, prev_data.month_8_recurr_month_11_sales, 0) AS month_8_recurr_month_11_sales,
    IF(prev_data.month_8_ntb_conv>0, prev_data.month_8_users_recurr_month_12, 0) AS month_8_users_recurr_month_12,
    IF(prev_data.month_8_ntb_conv>0, prev_data.month_8_recurr_month_12_sales, 0) AS month_8_recurr_month_12_sales,
    IF(prev_data.month_8_ntb_conv>0, prev_data.month_8_total_return_users, 0) AS month_8_total_return_users,
    prev_data.month_9_ntb_conv,
    prev_data.month_9_ntb_sales,
    IF(prev_data.month_9_ntb_conv>0, prev_data.month_9_users_recurr_month_10, 0) AS month_9_users_recurr_month_10,
    IF(prev_data.month_9_ntb_conv>0, prev_data.month_9_recurr_month_10_sales, 0) AS month_9_recurr_month_10_sales,
    IF(prev_data.month_9_ntb_conv>0, prev_data.month_9_users_recurr_month_11, 0) AS month_9_users_recurr_month_11,
    IF(prev_data.month_9_ntb_conv>0, prev_data.month_9_recurr_month_11_sales, 0) AS month_9_recurr_month_11_sales,
    IF(prev_data.month_9_ntb_conv>0, prev_data.month_9_users_recurr_month_12, 0) AS month_9_users_recurr_month_12,
    IF(prev_data.month_9_ntb_conv>0, prev_data.month_9_recurr_month_12_sales, 0) AS month_9_recurr_month_12_sales,
    IF(prev_data.month_9_ntb_conv>0, prev_data.month_9_total_return_users, 0) AS month_9_total_return_users,
    prev_data.month_10_ntb_conv,
    prev_data.month_10_ntb_sales,
    IF(prev_data.month_10_ntb_conv>0, prev_data.month_10_users_recurr_month_11, 0) AS month_10_users_recurr_month_11,
    IF(prev_data.month_10_ntb_conv>0, prev_data.month_10_recurr_month_11_sales, 0) AS month_10_recurr_month_11_sales,
    IF(prev_data.month_10_ntb_conv>0, prev_data.month_10_users_recurr_month_12, 0) AS month_10_users_recurr_month_12,
    IF(prev_data.month_10_ntb_conv>0, prev_data.month_10_recurr_month_12_sales, 0) AS month_10_recurr_month_12_sales,
    IF(prev_data.month_10_ntb_conv>0, prev_data.month_10_total_return_users, 0) AS month_10_total_return_users,
    prev_data.month_11_ntb_conv,
    prev_data.month_11_ntb_sales,
    IF(prev_data.month_11_ntb_conv>0, recur.month_11_users_recurr_month_12, 0) AS month_11_users_recurr_month_12,
    IF(prev_data.month_11_ntb_conv>0, recur.month_11_recurr_month_12_sales, 0) AS month_11_recurr_month_12_sales,
    IF(prev_data.month_11_ntb_conv>0, recur.month_11_total_return_users, 0) AS month_11_total_return_users,
    prev_data.month_12_ntb_conv,
    prev_data.month_12_ntb_sales
    FROM
    month_10_data prev_data
    LEFT JOIN
    month_11_recurr recur
    ON prev_data.campaign = recur.campaign
    GROUP BY
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66
    ),
    percentage_data AS (
    SELECT 
    advertiser,
    campaign,
    total_ntb_users,
    total_ntb_conversions,
    month_6_ntb_conv,
    IF(month_6_ntb_sales=0, 0, ROUND(month_6_ntb_sales/month_6_ntb_conv,1)) AS month_6_ntb_avg_sales,
    IF(month_6_users_recurr_month_7 IS NULL OR month_6_users_recurr_month_7=0, 0, ROUND((month_6_users_recurr_month_7*100)/month_6_ntb_conv,1)) AS month_6_users_recurr_month_7_perc,
    IF(month_6_recurr_month_7_sales IS NULL OR month_6_recurr_month_7_sales=0, 0, ROUND(month_6_recurr_month_7_sales/month_6_users_recurr_month_7,1)) AS month_6_recurr_month_7_avg_sales,
    IF(month_6_users_recurr_month_8 IS NULL OR month_6_users_recurr_month_8=0, 0, ROUND((month_6_users_recurr_month_8*100)/month_6_ntb_conv,1)) AS month_6_users_recurr_month_8_perc,
    IF(month_6_recurr_month_8_sales IS NULL OR month_6_recurr_month_8_sales=0, 0, ROUND(month_6_recurr_month_8_sales/month_6_users_recurr_month_8,1)) AS month_6_recurr_month_8_avg_sales,
    IF(month_6_users_recurr_month_9 IS NULL OR month_6_users_recurr_month_9=0, 0, ROUND((month_6_users_recurr_month_9*100)/month_6_ntb_conv,1)) AS month_6_users_recurr_month_9_perc,
    IF(month_6_recurr_month_9_sales IS NULL OR month_6_recurr_month_9_sales=0, 0, ROUND(month_6_recurr_month_9_sales/month_6_users_recurr_month_9,1)) AS month_6_recurr_month_9_avg_sales,
    IF(month_6_users_recurr_month_10 IS NULL OR month_6_users_recurr_month_10=0, 0, ROUND((month_6_users_recurr_month_10*100)/month_6_ntb_conv,1)) AS month_6_users_recurr_month_10_perc,
    IF(month_6_recurr_month_10_sales IS NULL OR month_6_recurr_month_10_sales=0, 0, ROUND(month_6_recurr_month_10_sales/month_6_users_recurr_month_10,1)) AS month_6_recurr_month_10_avg_sales,
    IF(month_6_users_recurr_month_11 IS NULL OR month_6_users_recurr_month_11=0, 0, ROUND((month_6_users_recurr_month_11*100)/month_6_ntb_conv,1)) AS month_6_users_recurr_month_11_perc,
    IF(month_6_recurr_month_11_sales IS NULL OR month_6_recurr_month_11_sales=0, 0, ROUND(month_6_recurr_month_11_sales/month_6_users_recurr_month_11,1)) AS month_6_recurr_month_11_avg_sales,
    IF(month_6_users_recurr_month_12 IS NULL OR month_6_users_recurr_month_12=0, 0, ROUND((month_6_users_recurr_month_12*100)/month_6_ntb_conv,1)) AS month_6_users_recurr_month_12_perc,
    IF(month_6_recurr_month_12_sales IS NULL OR month_6_recurr_month_12_sales=0, 0, ROUND(month_6_recurr_month_12_sales/month_6_users_recurr_month_12,1)) AS month_6_recurr_month_12_avg_sales,
    IF(month_6_total_return_users IS NULL OR month_6_total_return_users=0, 0, ROUND((month_6_total_return_users*100)/month_6_ntb_conv,1)) AS month_6_total_return_users_perc,
    month_7_ntb_conv,
    IF(month_7_ntb_sales=0, 0, ROUND(month_7_ntb_sales/month_7_ntb_conv,1)) AS month_7_ntb_avg_sales,
    IF(month_7_users_recurr_month_8 IS NULL OR month_7_users_recurr_month_8=0, 0, ROUND((month_7_users_recurr_month_8*100)/month_7_ntb_conv,1)) AS month_7_users_recurr_month_8_perc,
    IF(month_7_recurr_month_8_sales IS NULL OR month_7_recurr_month_8_sales=0, 0, ROUND(month_7_recurr_month_8_sales/month_7_users_recurr_month_8,1)) AS month_7_recurr_month_8_avg_sales,
    IF(month_7_users_recurr_month_9 IS NULL OR month_7_users_recurr_month_9=0, 0, ROUND((month_7_users_recurr_month_9*100)/month_7_ntb_conv,1)) AS month_7_users_recurr_month_9_perc,
    IF(month_7_recurr_month_9_sales IS NULL OR month_7_recurr_month_9_sales=0, 0, ROUND(month_7_recurr_month_9_sales/month_7_users_recurr_month_9,1)) AS month_7_recurr_month_9_avg_sales,
    IF(month_7_users_recurr_month_10 IS NULL OR month_7_users_recurr_month_10=0, 0, ROUND((month_7_users_recurr_month_10*100)/month_7_ntb_conv,1)) AS month_7_users_recurr_month_10_perc,
    IF(month_7_recurr_month_10_sales IS NULL OR month_7_recurr_month_10_sales=0, 0, ROUND(month_7_recurr_month_10_sales/month_7_users_recurr_month_10,1)) AS month_7_recurr_month_10_avg_sales,
    IF(month_7_users_recurr_month_11 IS NULL OR month_7_users_recurr_month_11=0, 0, ROUND((month_7_users_recurr_month_11*100)/month_7_ntb_conv,1)) AS month_7_users_recurr_month_11_perc,
    IF(month_7_recurr_month_11_sales IS NULL OR month_7_recurr_month_11_sales=0, 0, ROUND(month_7_recurr_month_11_sales/month_7_users_recurr_month_11,1)) AS month_7_recurr_month_11_avg_sales,
    IF(month_7_users_recurr_month_12 IS NULL OR month_7_users_recurr_month_12=0, 0, ROUND((month_7_users_recurr_month_12*100)/month_7_ntb_conv,1)) AS month_7_users_recurr_month_12_perc,
    IF(month_7_recurr_month_12_sales IS NULL OR month_7_recurr_month_12_sales=0, 0, ROUND(month_7_recurr_month_12_sales/month_7_users_recurr_month_12,1)) AS month_7_recurr_month_12_avg_sales,
    IF(month_7_total_return_users IS NULL OR month_7_total_return_users=0, 0, ROUND((month_7_total_return_users*100)/month_7_ntb_conv,1)) AS month_7_total_return_users_perc,
    month_8_ntb_conv,
    IF(month_8_ntb_sales=0, 0, ROUND(month_8_ntb_sales/month_8_ntb_conv,1)) AS month_8_ntb_avg_sales,
    IF(month_8_users_recurr_month_9 IS NULL OR month_8_users_recurr_month_9=0, 0, ROUND((month_8_users_recurr_month_9*100)/month_8_ntb_conv,1)) AS month_8_users_recurr_month_9_perc,
    IF(month_8_recurr_month_9_sales IS NULL OR month_8_recurr_month_9_sales=0, 0, ROUND(month_8_recurr_month_9_sales/month_8_users_recurr_month_9,1)) AS month_8_recurr_month_9_avg_sales,
    IF(month_8_users_recurr_month_10 IS NULL OR month_8_users_recurr_month_10=0, 0, ROUND((month_8_users_recurr_month_10*100)/month_8_ntb_conv,1)) AS month_8_users_recurr_month_10_perc,
    IF(month_8_recurr_month_10_sales IS NULL OR month_8_recurr_month_10_sales=0, 0, ROUND(month_8_recurr_month_10_sales/month_8_users_recurr_month_10,1)) AS month_8_recurr_month_10_avg_sales,
    IF(month_8_users_recurr_month_11 IS NULL OR month_8_users_recurr_month_11=0, 0, ROUND((month_8_users_recurr_month_11*100)/month_8_ntb_conv,1)) AS month_8_users_recurr_month_11_perc,
    IF(month_8_recurr_month_11_sales IS NULL OR month_8_recurr_month_11_sales=0, 0, ROUND(month_8_recurr_month_11_sales/month_8_users_recurr_month_11,1)) AS month_8_recurr_month_11_avg_sales,
    IF(month_8_users_recurr_month_12 IS NULL OR month_8_users_recurr_month_12=0, 0, ROUND((month_8_users_recurr_month_12*100)/month_8_ntb_conv,1)) AS month_8_users_recurr_month_12_perc,
    IF(month_8_recurr_month_12_sales IS NULL OR month_8_recurr_month_12_sales=0, 0, ROUND(month_8_recurr_month_12_sales/month_8_users_recurr_month_12,1)) AS month_8_recurr_month_12_avg_sales,
    IF(month_8_total_return_users IS NULL OR month_8_total_return_users=0, 0, ROUND((month_8_total_return_users*100)/month_8_ntb_conv,1)) AS month_8_total_return_users_perc,
    month_9_ntb_conv,
    IF(month_9_ntb_sales=0, 0, ROUND(month_9_ntb_sales/month_9_ntb_conv,1)) AS month_9_ntb_avg_sales,
    IF(month_9_users_recurr_month_10 IS NULL OR month_9_users_recurr_month_10=0, 0, ROUND((month_9_users_recurr_month_10*100)/month_9_ntb_conv,1)) AS month_9_users_recurr_month_10_perc,
    IF(month_9_recurr_month_10_sales IS NULL OR month_9_recurr_month_10_sales=0, 0, ROUND(month_9_recurr_month_10_sales/month_9_users_recurr_month_10,1)) AS month_9_recurr_month_10_avg_sales,
    IF(month_9_users_recurr_month_11 IS NULL OR month_9_users_recurr_month_11=0, 0, ROUND((month_9_users_recurr_month_11*100)/month_9_ntb_conv,1)) AS month_9_users_recurr_month_11_perc,
    IF(month_9_recurr_month_11_sales IS NULL OR month_9_recurr_month_11_sales=0, 0, ROUND(month_9_recurr_month_11_sales/month_9_users_recurr_month_11,1)) AS month_9_recurr_month_11_avg_sales,
    IF(month_9_users_recurr_month_12 IS NULL OR month_9_users_recurr_month_12=0, 0, ROUND((month_9_users_recurr_month_12*100)/month_9_ntb_conv,1)) AS month_9_users_recurr_month_12_perc,
    IF(month_9_recurr_month_12_sales IS NULL OR month_9_recurr_month_12_sales=0, 0, ROUND(month_9_recurr_month_12_sales/month_9_users_recurr_month_12,1)) AS month_9_recurr_month_12_avg_sales,
    IF(month_9_total_return_users IS NULL OR month_9_total_return_users=0, 0, ROUND((month_9_total_return_users*100)/month_9_ntb_conv,1)) AS month_9_total_return_users_perc,
    month_10_ntb_conv,
    IF(month_10_ntb_sales=0, 0, ROUND(month_10_ntb_sales/month_10_ntb_conv,1)) AS month_10_ntb_avg_sales,
    IF(month_10_users_recurr_month_11 IS NULL OR month_10_users_recurr_month_11=0, 0, ROUND((month_10_users_recurr_month_11*100)/month_10_ntb_conv,1)) AS month_10_users_recurr_month_11_perc,
    IF(month_10_recurr_month_11_sales IS NULL OR month_10_recurr_month_11_sales=0, 0, ROUND(month_10_recurr_month_11_sales/month_10_users_recurr_month_11,1)) AS month_10_recurr_month_11_avg_sales,
    IF(month_10_users_recurr_month_12 IS NULL OR month_10_users_recurr_month_12=0, 0, ROUND((month_10_users_recurr_month_12*100)/month_10_ntb_conv,1)) AS month_10_users_recurr_month_12_perc,
    IF(month_10_recurr_month_12_sales IS NULL OR month_10_recurr_month_12_sales=0, 0, ROUND(month_10_recurr_month_12_sales/month_10_users_recurr_month_12,1)) AS month_10_recurr_month_12_avg_sales,
    IF(month_10_total_return_users IS NULL OR month_10_total_return_users=0, 0, ROUND((month_10_total_return_users*100)/month_10_ntb_conv,1)) AS month_10_total_return_users_perc,
    month_11_ntb_conv,
    IF(month_11_ntb_sales=0, 0, ROUND(month_11_ntb_sales/month_11_ntb_conv,1)) AS month_11_ntb_avg_sales,
    IF(month_11_users_recurr_month_12 IS NULL OR month_11_users_recurr_month_12=0, 0, ROUND((month_11_users_recurr_month_12*100)/month_11_ntb_conv,1)) AS month_11_users_recurr_month_12_perc,
    IF(month_11_recurr_month_12_sales IS NULL OR month_11_recurr_month_12_sales=0, 0, ROUND(month_11_recurr_month_12_sales/month_11_users_recurr_month_12,1)) AS month_11_recurr_month_12_avg_sales,
    IF(month_11_total_return_users IS NULL OR month_11_total_return_users=0, 0, ROUND((month_11_total_return_users*100)/month_11_ntb_conv,1)) AS month_11_total_return_users_perc,
    month_12_ntb_conv,
    IF(month_12_ntb_sales=0, 0, ROUND(month_12_ntb_sales/month_12_ntb_conv,1)) AS month_12_ntb_avg_sales
    FROM
    preliminar_data
    GROUP BY
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66
    ),
    final_data AS (
    SELECT 
    advertiser,
    campaign,
    total_ntb_users,
    total_ntb_conversions,
    month_6_ntb_conv,
    month_6_ntb_avg_sales,
    month_6_users_recurr_month_7_perc,
    month_6_recurr_month_7_avg_sales,
    month_6_users_recurr_month_8_perc,
    month_6_recurr_month_8_avg_sales,
    month_6_users_recurr_month_9_perc,
    month_6_recurr_month_9_avg_sales,
    month_6_users_recurr_month_10_perc,
    month_6_recurr_month_10_avg_sales,
    month_6_users_recurr_month_11_perc,
    month_6_recurr_month_11_avg_sales,
    month_6_users_recurr_month_12_perc,
    month_6_recurr_month_12_avg_sales,
    (month_6_ntb_avg_sales+month_6_recurr_month_7_avg_sales+month_6_recurr_month_8_avg_sales+month_6_recurr_month_9_avg_sales+month_6_recurr_month_10_avg_sales+month_6_recurr_month_11_avg_sales+month_6_recurr_month_12_avg_sales) AS month_6_total_avg_sales,
    month_6_total_return_users_perc,
    month_7_ntb_conv,
    month_7_ntb_avg_sales,
    month_7_users_recurr_month_8_perc,
    month_7_recurr_month_8_avg_sales,
    month_7_users_recurr_month_9_perc,
    month_7_recurr_month_9_avg_sales,
    month_7_users_recurr_month_10_perc,
    month_7_recurr_month_10_avg_sales,
    month_7_users_recurr_month_11_perc,
    month_7_recurr_month_11_avg_sales,
    month_7_users_recurr_month_12_perc,
    month_7_recurr_month_12_avg_sales,
    (month_7_ntb_avg_sales+month_7_recurr_month_8_avg_sales+month_7_recurr_month_9_avg_sales+month_7_recurr_month_10_avg_sales+month_7_recurr_month_11_avg_sales+month_7_recurr_month_12_avg_sales) AS month_7_total_avg_sales,
    month_7_total_return_users_perc,
    month_8_ntb_conv,
    month_8_ntb_avg_sales,
    month_8_users_recurr_month_9_perc,
    month_8_recurr_month_9_avg_sales,
    month_8_users_recurr_month_10_perc,
    month_8_recurr_month_10_avg_sales,
    month_8_users_recurr_month_11_perc,
    month_8_recurr_month_11_avg_sales,
    month_8_users_recurr_month_12_perc,
    month_8_recurr_month_12_avg_sales,
    (month_8_ntb_avg_sales+month_8_recurr_month_9_avg_sales+month_8_recurr_month_10_avg_sales+month_8_recurr_month_11_avg_sales+month_8_recurr_month_12_avg_sales) AS month_8_total_avg_sales,
    month_8_total_return_users_perc,
    month_9_ntb_conv,
    month_9_ntb_avg_sales,
    month_9_users_recurr_month_10_perc,
    month_9_recurr_month_10_avg_sales,
    month_9_users_recurr_month_11_perc,
    month_9_recurr_month_11_avg_sales,
    month_9_users_recurr_month_12_perc,
    month_9_recurr_month_12_avg_sales,
    (month_9_ntb_avg_sales+month_9_recurr_month_10_avg_sales+month_9_recurr_month_11_avg_sales+month_9_recurr_month_12_avg_sales) AS month_9_total_avg_sales,
    month_9_total_return_users_perc,
    month_10_ntb_conv,
    month_10_ntb_avg_sales,
    month_10_users_recurr_month_11_perc,
    month_10_recurr_month_11_avg_sales,
    month_10_users_recurr_month_12_perc,
    month_10_recurr_month_12_avg_sales,
    (month_10_ntb_avg_sales+month_10_recurr_month_11_avg_sales+month_10_recurr_month_12_avg_sales) AS month_10_total_avg_sales,
    month_10_total_return_users_perc,
    month_11_ntb_conv,
    month_11_ntb_avg_sales,
    month_11_users_recurr_month_12_perc,
    month_11_recurr_month_12_avg_sales,
    (month_11_ntb_avg_sales+month_11_recurr_month_12_avg_sales) AS month_11_total_avg_sales,
    month_11_total_return_users_perc,
    month_12_ntb_conv,
    month_12_ntb_avg_sales,
    (month_12_ntb_avg_sales) AS month_12_total_avg_sales
    FROM 
    percentage_data
    GROUP BY
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73
    )
    SELECT
    advertiser,
    campaign,
    total_ntb_users,
    total_ntb_conversions,
    month_6_ntb_conv AS ${dates_map.get('month_6').month}_${dates_map.get('month_6').date.slice(0, 4)}_ntb_conv,
    month_6_ntb_avg_sales AS ${dates_map.get('month_6').month}_${dates_map.get('month_6').date.slice(0, 4)}_ntb_avg_sales,
    month_6_users_recurr_month_7_perc AS ${dates_map.get('month_6').month}_${dates_map.get('month_6').date.slice(0, 4)}_users_recurr_${dates_map.get('month_7').month}_${dates_map.get('month_7').date.slice(0, 4)}_perc,
    month_6_recurr_month_7_avg_sales AS ${dates_map.get('month_6').month}_${dates_map.get('month_6').date.slice(0, 4)}_recurr_${dates_map.get('month_7').month}_${dates_map.get('month_7').date.slice(0, 4)}_avg_sales,
    month_6_users_recurr_month_8_perc AS ${dates_map.get('month_6').month}_${dates_map.get('month_6').date.slice(0, 4)}_users_recurr_${dates_map.get('month_8').month}_${dates_map.get('month_8').date.slice(0, 4)}_perc,
    month_6_recurr_month_8_avg_sales AS ${dates_map.get('month_6').month}_${dates_map.get('month_6').date.slice(0, 4)}_recurr_${dates_map.get('month_8').month}_${dates_map.get('month_8').date.slice(0, 4)}_avg_sales,
    month_6_users_recurr_month_9_perc AS ${dates_map.get('month_6').month}_${dates_map.get('month_6').date.slice(0, 4)}_users_recurr_${dates_map.get('month_9').month}_${dates_map.get('month_9').date.slice(0, 4)}_perc,
    month_6_recurr_month_9_avg_sales AS ${dates_map.get('month_6').month}_${dates_map.get('month_6').date.slice(0, 4)}_recurr_${dates_map.get('month_9').month}_${dates_map.get('month_9').date.slice(0, 4)}_avg_sales,
    month_6_users_recurr_month_10_perc AS ${dates_map.get('month_6').month}_${dates_map.get('month_6').date.slice(0, 4)}_users_recurr_${dates_map.get('month_10').month}_${dates_map.get('month_10').date.slice(0, 4)}_perc,
    month_6_recurr_month_10_avg_sales AS ${dates_map.get('month_6').month}_${dates_map.get('month_6').date.slice(0, 4)}_recurr_${dates_map.get('month_10').month}_${dates_map.get('month_10').date.slice(0, 4)}_avg_sales,
    month_6_users_recurr_month_11_perc AS ${dates_map.get('month_6').month}_${dates_map.get('month_6').date.slice(0, 4)}_users_recurr_${dates_map.get('month_11').month}_${dates_map.get('month_11').date.slice(0, 4)}_perc,
    month_6_recurr_month_11_avg_sales AS ${dates_map.get('month_6').month}_${dates_map.get('month_6').date.slice(0, 4)}_recurr_${dates_map.get('month_11').month}_${dates_map.get('month_11').date.slice(0, 4)}_avg_sales,
    month_6_users_recurr_month_12_perc AS ${dates_map.get('month_6').month}_${dates_map.get('month_6').date.slice(0, 4)}_users_recurr_${dates_map.get('month_12').month}_${dates_map.get('month_12').date.slice(0, 4)}_perc,
    month_6_recurr_month_12_avg_sales AS ${dates_map.get('month_6').month}_${dates_map.get('month_6').date.slice(0, 4)}_recurr_${dates_map.get('month_12').month}_${dates_map.get('month_12').date.slice(0, 4)}_avg_sales,
    month_6_total_avg_sales AS ${dates_map.get('month_6').month}_${dates_map.get('month_6').date.slice(0, 4)}_total_avg_sales,
    month_6_total_return_users_perc AS ${dates_map.get('month_6').month}_${dates_map.get('month_6').date.slice(0, 4)}_total_return_users_perc,
    month_7_ntb_conv AS ${dates_map.get('month_7').month}_${dates_map.get('month_7').date.slice(0, 4)}_ntb_conv,
    month_7_ntb_avg_sales AS ${dates_map.get('month_7').month}_${dates_map.get('month_7').date.slice(0, 4)}_ntb_avg_sales,
    month_7_users_recurr_month_8_perc AS ${dates_map.get('month_7').month}_${dates_map.get('month_7').date.slice(0, 4)}_users_recurr_${dates_map.get('month_8').month}_${dates_map.get('month_8').date.slice(0, 4)}_perc,
    month_7_recurr_month_8_avg_sales AS ${dates_map.get('month_7').month}_${dates_map.get('month_7').date.slice(0, 4)}_recurr_${dates_map.get('month_8').month}_${dates_map.get('month_8').date.slice(0, 4)}_avg_sales,
    month_7_users_recurr_month_9_perc AS ${dates_map.get('month_7').month}_${dates_map.get('month_7').date.slice(0, 4)}_users_recurr_${dates_map.get('month_9').month}_${dates_map.get('month_9').date.slice(0, 4)}_perc,
    month_7_recurr_month_9_avg_sales AS ${dates_map.get('month_7').month}_${dates_map.get('month_7').date.slice(0, 4)}_recurr_${dates_map.get('month_9').month}_${dates_map.get('month_9').date.slice(0, 4)}_avg_sales,
    month_7_users_recurr_month_10_perc AS ${dates_map.get('month_7').month}_${dates_map.get('month_7').date.slice(0, 4)}_users_recurr_${dates_map.get('month_10').month}_${dates_map.get('month_10').date.slice(0, 4)}_perc,
    month_7_recurr_month_10_avg_sales AS ${dates_map.get('month_7').month}_${dates_map.get('month_7').date.slice(0, 4)}_recurr_${dates_map.get('month_10').month}_${dates_map.get('month_10').date.slice(0, 4)}_avg_sales,
    month_7_users_recurr_month_11_perc AS ${dates_map.get('month_7').month}_${dates_map.get('month_7').date.slice(0, 4)}_users_recurr_${dates_map.get('month_11').month}_${dates_map.get('month_11').date.slice(0, 4)}_perc,
    month_7_recurr_month_11_avg_sales AS ${dates_map.get('month_7').month}_${dates_map.get('month_7').date.slice(0, 4)}_recurr_${dates_map.get('month_11').month}_${dates_map.get('month_11').date.slice(0, 4)}_avg_sales,
    month_7_users_recurr_month_12_perc AS ${dates_map.get('month_7').month}_${dates_map.get('month_7').date.slice(0, 4)}_users_recurr_${dates_map.get('month_12').month}_${dates_map.get('month_12').date.slice(0, 4)}_perc,
    month_7_recurr_month_12_avg_sales AS ${dates_map.get('month_7').month}_${dates_map.get('month_7').date.slice(0, 4)}_recurr_${dates_map.get('month_12').month}_${dates_map.get('month_12').date.slice(0, 4)}_avg_sales,
    month_7_total_avg_sales AS ${dates_map.get('month_7').month}_${dates_map.get('month_7').date.slice(0, 4)}_total_avg_sales,
    month_7_total_return_users_perc AS ${dates_map.get('month_7').month}_${dates_map.get('month_7').date.slice(0, 4)}_total_return_users_perc,
    month_8_ntb_conv AS ${dates_map.get('month_8').month}_${dates_map.get('month_8').date.slice(0, 4)}_ntb_conv,
    month_8_ntb_avg_sales AS ${dates_map.get('month_8').month}_${dates_map.get('month_8').date.slice(0, 4)}_ntb_avg_sales,
    month_8_users_recurr_month_9_perc AS ${dates_map.get('month_8').month}_${dates_map.get('month_8').date.slice(0, 4)}_users_recurr_${dates_map.get('month_9').month}_${dates_map.get('month_9').date.slice(0, 4)}_perc,
    month_8_recurr_month_9_avg_sales AS ${dates_map.get('month_8').month}_${dates_map.get('month_8').date.slice(0, 4)}_recurr_${dates_map.get('month_9').month}_${dates_map.get('month_9').date.slice(0, 4)}_avg_sales,
    month_8_users_recurr_month_10_perc AS ${dates_map.get('month_8').month}_${dates_map.get('month_8').date.slice(0, 4)}_users_recurr_${dates_map.get('month_10').month}_${dates_map.get('month_10').date.slice(0, 4)}_perc,
    month_8_recurr_month_10_avg_sales AS ${dates_map.get('month_8').month}_${dates_map.get('month_8').date.slice(0, 4)}_recurr_${dates_map.get('month_10').month}_${dates_map.get('month_10').date.slice(0, 4)}_avg_sales,
    month_8_users_recurr_month_11_perc AS ${dates_map.get('month_8').month}_${dates_map.get('month_8').date.slice(0, 4)}_users_recurr_${dates_map.get('month_11').month}_${dates_map.get('month_11').date.slice(0, 4)}_perc,
    month_8_recurr_month_11_avg_sales AS ${dates_map.get('month_8').month}_${dates_map.get('month_8').date.slice(0, 4)}_recurr_${dates_map.get('month_11').month}_${dates_map.get('month_11').date.slice(0, 4)}_avg_sales,
    month_8_users_recurr_month_12_perc AS ${dates_map.get('month_8').month}_${dates_map.get('month_8').date.slice(0, 4)}_users_recurr_${dates_map.get('month_12').month}_${dates_map.get('month_12').date.slice(0, 4)}_perc,
    month_8_recurr_month_12_avg_sales AS ${dates_map.get('month_8').month}_${dates_map.get('month_8').date.slice(0, 4)}_recurr_${dates_map.get('month_12').month}_${dates_map.get('month_12').date.slice(0, 4)}_avg_sales,
    month_8_total_avg_sales AS ${dates_map.get('month_8').month}_${dates_map.get('month_8').date.slice(0, 4)}_total_avg_sales,
    month_8_total_return_users_perc AS ${dates_map.get('month_8').month}_${dates_map.get('month_8').date.slice(0, 4)}_total_return_users_perc,
    month_9_ntb_conv AS ${dates_map.get('month_9').month}_${dates_map.get('month_9').date.slice(0, 4)}_ntb_conv,
    month_9_ntb_avg_sales AS ${dates_map.get('month_9').month}_${dates_map.get('month_9').date.slice(0, 4)}_ntb_avg_sales,
    month_9_users_recurr_month_10_perc AS ${dates_map.get('month_9').month}_${dates_map.get('month_9').date.slice(0, 4)}_users_recurr_${dates_map.get('month_10').month}_${dates_map.get('month_10').date.slice(0, 4)}_perc,
    month_9_recurr_month_10_avg_sales AS ${dates_map.get('month_9').month}_${dates_map.get('month_9').date.slice(0, 4)}_recurr_${dates_map.get('month_10').month}_${dates_map.get('month_10').date.slice(0, 4)}_avg_sales,
    month_9_users_recurr_month_11_perc AS ${dates_map.get('month_9').month}_${dates_map.get('month_9').date.slice(0, 4)}_users_recurr_${dates_map.get('month_11').month}_${dates_map.get('month_11').date.slice(0, 4)}_perc,
    month_9_recurr_month_11_avg_sales AS ${dates_map.get('month_9').month}_${dates_map.get('month_9').date.slice(0, 4)}_recurr_${dates_map.get('month_11').month}_${dates_map.get('month_11').date.slice(0, 4)}_avg_sales,
    month_9_users_recurr_month_12_perc AS ${dates_map.get('month_9').month}_${dates_map.get('month_9').date.slice(0, 4)}_users_recurr_${dates_map.get('month_12').month}_${dates_map.get('month_12').date.slice(0, 4)}_perc,
    month_9_recurr_month_12_avg_sales AS ${dates_map.get('month_9').month}_${dates_map.get('month_9').date.slice(0, 4)}_recurr_${dates_map.get('month_12').month}_${dates_map.get('month_12').date.slice(0, 4)}_avg_sales,
    month_9_total_avg_sales AS ${dates_map.get('month_9').month}_${dates_map.get('month_9').date.slice(0, 4)}_total_avg_sales,
    month_9_total_return_users_perc AS ${dates_map.get('month_9').month}_${dates_map.get('month_9').date.slice(0, 4)}_total_return_users_perc,
    month_10_ntb_conv AS ${dates_map.get('month_10').month}_${dates_map.get('month_10').date.slice(0, 4)}_ntb_conv,
    month_10_ntb_avg_sales AS ${dates_map.get('month_10').month}_${dates_map.get('month_10').date.slice(0, 4)}_ntb_avg_sales,
    month_10_users_recurr_month_11_perc AS ${dates_map.get('month_10').month}_${dates_map.get('month_10').date.slice(0, 4)}_users_recurr_${dates_map.get('month_11').month}_${dates_map.get('month_11').date.slice(0, 4)}_perc,
    month_10_recurr_month_11_avg_sales AS ${dates_map.get('month_10').month}_${dates_map.get('month_10').date.slice(0, 4)}_recurr_${dates_map.get('month_11').month}_${dates_map.get('month_11').date.slice(0, 4)}_avg_sales,
    month_10_users_recurr_month_12_perc AS ${dates_map.get('month_10').month}_${dates_map.get('month_10').date.slice(0, 4)}_users_recurr_${dates_map.get('month_12').month}_${dates_map.get('month_12').date.slice(0, 4)}_perc,
    month_10_recurr_month_12_avg_sales AS ${dates_map.get('month_10').month}_${dates_map.get('month_10').date.slice(0, 4)}_recurr_${dates_map.get('month_12').month}_${dates_map.get('month_12').date.slice(0, 4)}_avg_sales,
    month_10_total_avg_sales AS ${dates_map.get('month_10').month}_${dates_map.get('month_10').date.slice(0, 4)}_total_avg_sales,
    month_10_total_return_users_perc AS ${dates_map.get('month_10').month}_${dates_map.get('month_10').date.slice(0, 4)}_total_return_users_perc,
    month_11_ntb_conv AS ${dates_map.get('month_11').month}_${dates_map.get('month_11').date.slice(0, 4)}_ntb_conv,
    month_11_ntb_avg_sales AS ${dates_map.get('month_11').month}_${dates_map.get('month_11').date.slice(0, 4)}_ntb_avg_sales,
    month_11_users_recurr_month_12_perc AS ${dates_map.get('month_11').month}_${dates_map.get('month_11').date.slice(0, 4)}_users_recurr_${dates_map.get('month_12').month}_${dates_map.get('month_12').date.slice(0, 4)}_perc,
    month_11_recurr_month_12_avg_sales AS ${dates_map.get('month_11').month}_${dates_map.get('month_11').date.slice(0, 4)}_recurr_${dates_map.get('month_12').month}_${dates_map.get('month_12').date.slice(0, 4)}_avg_sales,
    month_11_total_avg_sales AS ${dates_map.get('month_11').month}_${dates_map.get('month_11').date.slice(0, 4)}_total_avg_sales,
    month_11_total_return_users_perc AS ${dates_map.get('month_11').month}_${dates_map.get('month_11').date.slice(0, 4)}_total_return_users_perc,
    month_12_ntb_conv AS ${dates_map.get('month_12').month}_${dates_map.get('month_12').date.slice(0, 4)}_ntb_conv,
    month_12_ntb_avg_sales AS ${dates_map.get('month_12').month}_${dates_map.get('month_12').date.slice(0, 4)}_ntb_avg_sales,
    month_12_total_avg_sales AS ${dates_map.get('month_12').month}_${dates_map.get('month_12').date.slice(0, 4)}_total_avg_sales
    FROM 
    final_data
    GROUP BY
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73`;
};
