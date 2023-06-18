import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from "components/shared-components/Loading";
import { APP_PREFIX_PATH } from "configs/AppConfig";

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route
          path={`${APP_PREFIX_PATH}/home`}
          component={lazy(() => import(`./pages/home`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/planner`}
          component={lazy(() => import(`./pages/planner`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/client-list`}
          component={lazy(() => import(`./pages/user-list`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/setting/:id`}
          component={lazy(() => import(`./pages/setting`))}
        />
        <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/home`} />
      </Switch>
    </Suspense>
  );
};

export default React.memo(AppViews);
