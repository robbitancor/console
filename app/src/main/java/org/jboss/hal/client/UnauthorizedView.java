/*
 * Copyright 2015-2016 Red Hat, Inc, and individual contributors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.jboss.hal.client;

import javax.annotation.PostConstruct;

import org.jboss.gwt.elemento.core.Widgets;
import org.jboss.gwt.elemento.template.Templated;
import org.jboss.hal.client.bootstrap.LoadingPanel;
import org.jboss.hal.core.mvp.HalViewImpl;

import static elemental2.dom.DomGlobal.document;
import static org.jboss.hal.resources.CSS.bootstrapError;

@Templated
public abstract class UnauthorizedView extends HalViewImpl implements UnauthorizedPresenter.MyView {

    public static UnauthorizedView create() {
        return new Templated_UnauthorizedView();
    }

    @PostConstruct
    void init() {
        initWidget(Widgets.asWidget(asElement()));
        LoadingPanel.get().off();
        document.documentElement.classList.add(bootstrapError);
    }
}