import * as B from 'src/components'
import { Link, Route } from 'react-router-dom'
import { Input, Button, Typography, Radio, Slider } from 'antd'
import { useController } from './contoller'
import theme from 'src/styles/theme'
import * as S from './style'
import { Fade } from 'react-reveal'
import { FrownOutlined, SmileOutlined } from '@ant-design/icons';

const { Title } = Typography;

const NewPool = () => {
    const { form, onSubmit } = useController()
    const value = 0;

    return <B.BaseTemplate backgroundColor={theme.primaryOverlay} verticalCenter>
        <B.Box mlr={4} width="100%">
            <Fade bottom distance="20px" delay={150}>
                <B.BaseCard backgroundColor={theme.primaryDark} shadow>
                    <B.Box p={2}>
                        <B.BaseText type="white" size={36} block mb={4}>
                            POOL 만들기
              </B.BaseText>
                        <B.BaseText type="white" size={18} block mb={4}>
                            1개 이상 골라주세요
              </B.BaseText>

                        <B.BaseForm form={form} onFinish={onSubmit}>
                            <B.Box display="flex">
                                <B.Box style={{ flex: '1 1 auto' }}>
                                    <S.StyledFormItem name="poolname" label="Pool 이름">
                                        <Input style={{ height: "58px" }} />
                                    </S.StyledFormItem>
                                    <S.StyledFormItem name="poolmode" label="Pool 모드">
                                        <Radio.Group defaultValue="a" size="large">
                                            <Radio.Button value="a" style={{ width: "212px", height: "58px", borderRadius: "8px", marginRight: "58px", background: "transparent" }}>조용한 모드</Radio.Button>
                                            <Radio.Button value="b" style={{ width: "212px", height: "58px", borderRadius: "8px", background: "transparent" }}>자유로운 모드</Radio.Button>
                                        </Radio.Group>
                                    </S.StyledFormItem>
                                    <S.StyledFormItem name="capacity" label="최대 인원">
                                        <Slider value={value} />
                                    </S.StyledFormItem>
                                    <S.StyledFormItem name="keyword" label="키워드">
                                        <Button ghost style={{ width: "126px", height: "58px", borderRadius: "8px", marginRight: "10px" }}>영어자격증</Button>
                                        <Button ghost style={{ width: "126px", height: "58px", borderRadius: "8px", marginRight: "10px" }}>디자인/예술</Button>
                                        <Button ghost style={{ width: "126px", height: "58px", borderRadius: "8px", marginRight: "10px" }}>컴퓨터/개발</Button>
                                        <Button ghost style={{ width: "126px", height: "58px", borderRadius: "8px", marginRight: "10px" }}>취미/여가</Button>
                                        <Button ghost style={{ width: "126px", height: "58px", borderRadius: "8px", marginRight: "10px" }}>독서</Button>
                                    </S.StyledFormItem>
                                </B.Box>
                                <B.Box width={40}></B.Box>
                            </B.Box>
                        </B.BaseForm>
                    </B.Box>
                </B.BaseCard>
            </Fade>
        </B.Box>
        <B.Box mt={4}>
            <B.TextRight>
                <Button type="primary" htmlType="submit">
                    <B.BaseText bold plr={4}>
                        가입하기
                    </B.BaseText>
                </Button>
            </B.TextRight>
        </B.Box>
    </B.BaseTemplate>
}

export default NewPool
