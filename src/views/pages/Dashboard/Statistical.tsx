import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';
import { BoxNumberStatis, BoxOverview, BoxStatistis, NumberStatis, TextTitleStatis } from './style';

interface Props {}

const Statistical = (props: Props) => {
  const { t } = useTranslation();
  return (
    <BoxOverview>
      <Typography sx={{ fontSize: '24px', fontWeight: 600, margin: '0px 0 16px 0' }}>
        {t('Page.Dashboard.StatisticDay')}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <BoxStatistis sx={{ backgroundColor: 'rgb(75, 73, 172, 0.4)' }} className="wh-full">
            <TextTitleStatis>{t('Page.Dashboard.SumIncome')}</TextTitleStatis>
            <BoxNumberStatis>
              {/* <MonetizationOnOutlinedIcon sx={{ fontSize: '3.5em' }} /> */}
              <NumberStatis>20.000.000</NumberStatis>
            </BoxNumberStatis>
          </BoxStatistis>
        </Grid>

        <Grid item xs={3}>
          <BoxStatistis sx={{ backgroundColor: 'rgb(182, 116, 196, 0.4)' }} className="wh-full">
            <TextTitleStatis>{t('Page.Dashboard.Profit')}</TextTitleStatis>
            <BoxNumberStatis>
              {/* <MonetizationOnOutlinedIcon sx={{ fontSize: '3.5em' }} /> */}
              <NumberStatis>2.000.000</NumberStatis>
            </BoxNumberStatis>
          </BoxStatistis>
        </Grid>

        <Grid item xs={3}>
          <BoxStatistis sx={{ backgroundColor: 'rgb(230, 220, 48, 0.4)' }} className="wh-full">
            <TextTitleStatis>{t('Page.Dashboard.InsuranceProduct')}</TextTitleStatis>
            <BoxNumberStatis>
              {/* <CategoryOutlinedIcon sx={{ fontSize: '3.5em' }} /> */}
              <NumberStatis>10</NumberStatis>
            </BoxNumberStatis>
          </BoxStatistis>
        </Grid>

        <Grid item xs={3}>
          <BoxStatistis sx={{ backgroundColor: 'rgb(85, 235, 80, 0.4)' }} className="wh-full">
            <TextTitleStatis>{t('Page.Dashboard.Order')}</TextTitleStatis>
            <BoxNumberStatis>
              {/* <ShoppingCartOutlinedIcon sx={{ fontSize: '3.5em' }} /> */}
              <NumberStatis>55</NumberStatis>
            </BoxNumberStatis>
          </BoxStatistis>
        </Grid>
      </Grid>
    </BoxOverview>
  );
};

export default Statistical;
