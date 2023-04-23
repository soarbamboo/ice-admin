/* eslint-disable @typescript-eslint/no-shadow */
import { getList } from '@/services/ant-design-pro/file';
import { Table } from 'antd';
import { useEffect, useState } from 'react';

const FileList: React.FC = () => {
  const [data, setData] = useState({} as any);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  async function getListData(current: any, pageSize: any) {
    const result = await getList(current, pageSize);
    if (result.status) {
      setData(result.data);
    }
  }

  function onChange(page: any, pageSize: any) {
    setCurrent(page);
    setPageSize(pageSize);
    setTimeout(() => {
      getListData(page, pageSize);
    });
  }
  useEffect(() => {
    getListData(1, 10);
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
      <Table
        dataSource={data?.records || []}
        columns={columns}
        pagination={{
          position: ['bottomRight'],
          current,
          pageSize,
          total: data.total,
          onChange,
          showQuickJumper: true,
          showSizeChanger: true,
        }}
      />
      ;
    </div>
  );
};

export default FileList;
