exec(`powershell "$connector = new-object system.data.oledb.oledbdataadapter -argument \\"SELECT System.ItemPathDisplay FROM SYSTEMINDEX WHERE CONTAINS (System.FileName, '\\"\\"Google Chrome\\"\\" OR Cefclient.exe')\\", \\"provider=search.collatordso;extended properties='application=windows';\\"; $dataset = new-object system.data.dataset; if ($connector.fill($dataset)) { $dataset.tables[0] }"`,__result);
exec(`powershell "(Get-Item 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe').FullName; (Get-Item 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe','C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe').VersionInfo; (Get-Item 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe').VersionInfo.ProductVersion;"`,__result);