﻿/*global define */
/*
 | Copyright 2014 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define(
   ({
    map: {
      error: "無法建立地圖"
    },
    legend: {
      title: "圖例(L)"
    },
    share: {
      title: "共用"
    },
    about: {
      title: "關於",
      error: "預設情況下，將使用 web 地圖描述或代碼片段。配置應用程式來為關於面板新增自訂代碼片段。"
    },
    time: {
      enableTimeMessage: "試_The specified web map does not contain any time enabled layers. View the ${link} help topic for details. To use the template without displaying time use the configuration panel to disable the time option______________________________________________________________驗.",
      enableTimeMessageLink: "試_http://doc.arcgis.com/en/arcgis-online/create-maps/configure-time.htm#ESRI_SECTION1_F1D4A275B4AB4CC79198CBA9D0AD8727____________________________________驗"
    },
    histogram: {
      error: "在快照模式下，web 地圖中的已啟用時間的圖徵層不可用。配置應用程式以使用另一個 web 地圖或停用長條圖選項。"
    }
  })
);
