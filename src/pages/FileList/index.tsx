/* eslint-disable @typescript-eslint/no-shadow */
import { getList } from '@/services/ant-design-pro/file';
import { List, Table, Typography } from 'antd';
import { useEffect, useState } from 'react';

const FileList: React.FC = () => {
  const [data, setData] = useState([]);

  async function getListData() {
    const result = await getList(1, 10);
    if (result.status) {
      setData(result.data.records);
    }
  }
  useEffect(() => {
    getListData();
  }, []);

  const columns = [
    {
      title: '图片',
      dataIndex: 'img',
      key: 'img',
      render: (_: any, data: any) => (
        <div>
          <img src={data.link} style={{ width: 200, height: 200 }} />
        </div>
      ),
    },
    {
      title: '图片链接',
      dataIndex: 'link',
      key: 'link',
      copyable: true,
    },
    {
      title: '图片hash',
      dataIndex: 'hash',
      key: 'hash',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      key: 'updateTime',
    },
  ];
  return (
    <div>
      <Table dataSource={data} columns={columns} />;
    </div>
  );
};

export default FileList;
