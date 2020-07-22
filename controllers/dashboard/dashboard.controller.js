import dashboardModel from '../../models/dashboard/dashboard.model';

const dashboard = (req, res, next) => {
  res.json(dashboardModel)
};

export default {
  dashboard
}
